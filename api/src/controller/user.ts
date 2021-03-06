import { Repository, getRepository } from 'typeorm';
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';

import { SuperUser } from '../entities/user';
import { sendEmail } from './auth';
import { content } from '../helpers/emailTemplate';

dotenv.config();

export class Controller {
    read(request: any, response: any) {
        const { id } = request.params;
        const user = repository();

        respond(response, user.findOne(id));
    }

    create(request: any, response: any) {
        const user = repository();

        let userObj = new SuperUser();
        const date = new Date();

        userObj = createRoutine(userObj, request, date.getTime(), date.getTime());

        respond(response, user.save(userObj));
    }

    signin(request: any, response: any) {
        const { email } = request.body;
        const user = repository();

        const code = Math.floor(Math.random() * 9999);
        user.findOne({ email })
        .then(data => {
            data.code = code;
            user.save(data);

            sendEmail(data.email, content(code), 'Seu código de confirmação');

            response.status(200).json({ email: data.email });
        })
        .catch((err: any) => response.status(400).json({ error: 'Falhou!' }));
    }

    async update(request: any, response: any) {
        const { id } = request.params;

        const user = repository();
        const date = new Date();
        let userData = await user.findOne(id);

        userData = createRoutine(userData, request, userData.createdAt, date.getTime());

        respond(response, user.save(userData));
    }

    verifySignin(request: any, response: any) {
        const { code, email } = request.body;

        const user = repository();
        const token = JWT.sign(code, process.env.JWT_SECRET);

        user.findOne({ code })
        .then(data => {
            if(data.email === email) response.status(200).json({ email: data.email, id: data.id, token });
            else response.status(400).json({ error: 'Falhou!' });
        })
        .catch((err: any) => response.status(400).json({ error: 'Falhou!' }));
    }

    delete(request: any, response: any) {
        const { id } = request.params;
        const user = repository();
        respond(response, user.delete({ id }));
    }
}

export const respond = (response: any, fn: any) => {
    fn
    .then((data: any) => response.status(200).json({ name: data.name, email: data.email }))
    .catch((err: any) => response.status(400).json({ error: 'Falhou!' }));
}

export const repository = (): Repository<SuperUser> => getRepository(SuperUser);

export const createRoutine = (user: SuperUser, request: any, created: number, updated: number): SuperUser => {
    const { name, email, image } = request.body;

    user.name = name;
    user.email = email;
    user.image = image ? image : 'false';
    user.code = Math.floor(Math.random() * 9999);
    user.createdAt = created;
    user.updatedAt = updated;

    return user;
}

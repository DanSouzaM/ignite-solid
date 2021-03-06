import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers

    try {
      const userAll = this.listAllUsersUseCase.execute({
        user_id: user_id.toString()
      })
  
      return response.send(userAll);
    } catch (error) {
      return response.status(400).json({ error })
    }
  }
}

export { ListAllUsersController };

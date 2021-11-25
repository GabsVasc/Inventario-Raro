import { Usuario } from "../models/UsuarioEntity";
import { EntityRepository, Repository } from "typeorm";
import { IUsuarioRepository } from "../@types/repositories/IUsuarioRepository";

@EntityRepository(Usuario)
export class UsuarioRepository
  extends Repository<Usuario>
  implements IUsuarioRepository
{
  async findByEmail(usuarioEmail: string): Promise<Usuario> {
    return await this.findOne({
      where: { email: usuarioEmail },
    });
  }
}

import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoEquipamento } from "./TipoEquipamentoEntity";

@Entity()
export class Parametro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tempoMedioEnvio: number;

  @Column()
  tempoMedioConsumo: number;

  @Column()
  tempoMedioReposicao: number;

  @Column()
  quantidadeCritica: number;

  @OneToOne(
    () => TipoEquipamento,
    (tipoEquipamento) => tipoEquipamento.parametro
  )
  tipoEquipamento: TipoEquipamento;
}
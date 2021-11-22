import { ColaboradorController } from "../controllers/ColaboradorController";
import { RequestHandler, Router } from "express";
import Container from "typedi";
const router = Router();

const getController = (): ColaboradorController => {
  return Container.get<ColaboradorController>("ColaboradorController");
};

const createRouter = (): Router => {
  router.get("", (async (req, res) => {
    await getController().listar(req, res);
  }) as RequestHandler);
  router.get(
    "/:id",
    (async (req, res) =>
      await getController().buscar(req, res)) as RequestHandler
  );
  router.post(
    "/sign-up",
    (async (req, res) =>
      await getController().criar(req, res)) as RequestHandler
  );
  router.patch(
    "/:id",
    (async (req, res) =>
      await getController().atualizar(req, res)) as RequestHandler
  );
  router.delete(
    "/:id",
    (async (req, res) =>
      await getController().remover(req, res)) as RequestHandler
  );
  router.get(
    "/:id/equipamento",
    (async (req, res) =>
      await getController().buscaEquipamentoDoColaborador(
        req,
        res
      )) as RequestHandler
  );

  return router;
};

export default createRouter;

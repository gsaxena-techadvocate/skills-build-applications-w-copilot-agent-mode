import { Router, type RequestHandler } from 'express';
import type { Model } from 'mongoose';
import { Activity, Leaderboard, Team, User, Workout } from '../models/index.js';

const router = Router();

function listDocuments<T>(model: Model<T>): RequestHandler {
  return async (_request, response, next) => {
    try {
      response.json(await model.find().lean());
    } catch (error) {
      next(error);
    }
  };
}

router.get('/users/', listDocuments(User));
router.get('/teams/', listDocuments(Team));
router.get('/activities/', listDocuments(Activity));
router.get('/leaderboard/', listDocuments(Leaderboard));
router.get('/workouts/', listDocuments(Workout));

export default router;
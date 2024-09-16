import express from 'express';
import 'dotenv/config';
import { mainRouter } from './routes/mainRouter';
import { generalLimiter } from './utils/config/rateLimit';
import promBundle from 'express-prom-bundle';

const app = express();
const PORT = process.env.PORT || 2000;

app.use(generalLimiter);

app.use('/api/v1', mainRouter);

//  Promethuss midelware
const metricsMiddleware = promBundle({
  includeMethod: true,
  includePath: true,
  includeStatusCode: true,
  promClient: {
    collectDefaultMetrics: {},
  },
});

app.use(metricsMiddleware);

app.listen(PORT, () => console.log(`PORT connected at PORT: ${PORT}`));

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import flightRoutes from './flight_schedule.json';
export default function handler(req, res) {
  res.status(200).json(flightRoutes);
}

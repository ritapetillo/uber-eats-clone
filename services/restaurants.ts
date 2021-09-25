//@ts-ignore
import { YELP_API_KEY } from "@env";
import axios from "axios";
import { Business } from "../interfaces/business";
import Location from "../interfaces/location";

export const getALlRestaurants = async ({ lat, lng }: Location) => {
  const response = await axios.get(
    `https://api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=${lng}&categories=restaurants&limit=50`,
    {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    }
  );
  return response.data.businesses;
};
export const fetchBusinessDetails = async (id: string): Promise<Business> => {
  const response = await axios.get(`https://api.yelp.com/v3/businesses/${id}`, {
    headers: {
      Authorization: `Bearer ${YELP_API_KEY}`,
    },
  });
  return response.data;
};

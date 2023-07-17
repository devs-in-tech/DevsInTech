import axios from "axios";

export default async function handler(req, res) {
  try {
    const { email } = req.body;
    const publicationId = process.env.NEXT_PUBLIC_PUBLICATION_ID;

    // Make the API call to subscribe to the newsletter
    const response = await axios.post(
      "https://devsintech.hashnode.dev/api/newsletter/subscribe",
      {
        email,
        publicationId,
      }
    );

    // Handle the response from the API call
    if (response.status === 200) {
      res
        .status(200)
        .json({ message: "Subscribed to the newsletter successfully!" });
    } else {
      res.status(500).json({ error: "Error subscribing to the newsletter" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error subscribing to the newsletter" });
  }
}

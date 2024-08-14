import { useQuery } from "@tanstack/react-query";

const fetchHackerNews = async () => {
  const response = await fetch("https://hn.algolia.com/api/v1/search?tags=front_page");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const useHackerNews = () => {
  return useQuery({
    queryKey: ["hackerNews"],
    queryFn: fetchHackerNews,
  });
};

export default useHackerNews;
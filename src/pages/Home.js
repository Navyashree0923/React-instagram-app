import { List, Paper } from "@mui/material";

import RecipeReviewCard from "../components/RecipeReviewCard";

export default function Home() {
  return (
      <List style={{
          overflow: "auto" 
      }}>
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
      
       
      </List>
  );
}

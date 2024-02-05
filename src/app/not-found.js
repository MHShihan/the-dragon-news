import { Button } from "@mui/material";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[20vh]">
      <h2 className="text-3xl font-bold">Opps! Not Found</h2>
      <p className="text-lg font-medium my-2">
        Could not find requested resource
      </p>
      <Link href="/">
        <Button className="border border-black text-black" variant="outlined">
          Return Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;

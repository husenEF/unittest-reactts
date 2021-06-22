import React, { FC, useState } from "react";

interface ToggleProps {
  title: string;
}

const Toogle: FC<ToggleProps> = ({ title }) => {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <button onClick={() => setLoading(!loading)} data-testid="btn-toogle">
      {loading ? "loading..." : title}
    </button>
  );
};
export default Toogle;

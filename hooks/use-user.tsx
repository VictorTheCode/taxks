"use client";

import axios from "axios";
import { useEffect, useState, useCallback } from "react";

interface UserProps {
  id: string;
  name: string;
  email: string;
}

export default function useUser() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = useCallback(async () => {
    try {
      const res = await axios.get("/api/me");
      if (res.data.success) {
        setUser(res.data.data);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error(error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const mutate = (newData?: UserProps | null) => {
    if (newData === undefined) {
      return fetchUser(); // refresh from the server
    }
    setUser(newData); // update the user
  };

  return { user, loading, mutate };
}

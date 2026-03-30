import { useState } from "react";
import { Contact } from "@/src/core/modules/contacto/domain/entity/contact.entity";

type ContactStatus = "idle" | "loading" | "success" | "error";

export const useCreateContact = () => {
  const [status, setStatus] = useState<ContactStatus>("idle");

  const submitContact = async (contactData: Contact): Promise<void> => {
    setStatus("loading");
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactData),
      });

      if (!res.ok) {
        throw new Error("Error al comunicarse con el módulo de contacto");
      }

      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
      throw error;
    }
  };

  return {
    status,
    submitContact,
  };
};
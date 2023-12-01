import React, { useState, FormEvent } from "react";
import Input from "./Input";
import { Event, EventTypes, Media } from "@/lib/definitions";
import api from "@/lib/api";
import { format } from "date-fns";
import Select from "./Select";
import Textarea from "./Textarea";
// import { Button } from "../ui/button";
import { CldUploadWidget } from "next-cloudinary";
import LinkButton from "../button-link/LinkButton";
import { useRouter } from "next/navigation";

interface FormError {
  error: string | null;
  message: string | null;
}

export default function Form() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<FormError | null>({
    error: null,
    message: null,
  });

  const [formValue, setFormValue] = useState<Event>({
    id: 9,
    type: EventTypes.game,
    date: format(new Date(), "yyyy-MM-dd'T'HH:mm"),
    place: "",
    title: "",
    description: "",
    attachments: []
  });

  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {

    event.preventDefault();
    setIsLoading(true);
    setError({ error: null, message: null }); // Clear previous errors when a new request starts

    try {
      const formData = new FormData(event.currentTarget);
      console.warn("Create Event", formValue);
      api.createEvent(formValue);

      setFormValue({
        id: "",
        type: EventTypes.game,
        date: format(new Date(), "yyyy-MM-dd'T'HH:mm"),
        place: "",
        title: "",
        description: "",
        attachments: [],
      });

      router.push('/events')

    } catch (error) {
      // Capture the error message to display to the user
      setError({ error: null, message: null });
      console.error(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  const onChange = (
    event: FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormValue({
      ...formValue,
      [event.currentTarget.id]: event.currentTarget.value,
    });
    // console.warn(event.currentTarget);
  };

  return (
    <div className="">
      {error && <div style={{ color: "red" }}>{error.message}</div>}
      <form onSubmit={onSubmit} className="w-full p-4 relative m-auto">
        <div className="flex flex-col gap-4 mb-4">
          <Select
            name="type"
            value={formValue.type}
            label="Training type"
            onChange={onChange}
          >
            {Object.values(EventTypes).map((type) => (
              <option key={type} value={type} id={type}>
                {type}
              </option>
            ))}
          </Select>
          <Input
            label="Training title"
            name="title"
            value={formValue.title}
            onChange={onChange}
            placeholder="Training title"
          ></Input>
          <Input
            label="Training location"
            name="place"
            value={formValue.place}
            onChange={onChange}
            placeholder="Location"
          ></Input>
          <Input
            label="Training date"
            name="date"
            type="datetime-local"
            value={formValue.date as string}
            onChange={onChange}
          ></Input>

          <Textarea
            label="Training description"
            name="description"
            value={formValue.description}
            onChange={onChange}
            rows={5}
            cols={500}
            placeholder="Description"
            maxLength={1000}
          />

        {/* <CldUploadWidget
            uploadPreset="coach_book"
            onSuccess={(result, { widget }) => {
              setFormValue({...formValue, attachments: [...formValue.attachments, result.info as Media]})
              // setResource(result?.info);
              console.warn("CldUploadWidget", result?.info)

              widget.close();
            }}
          >
            {({ open }) => {
              function handleOnClick() {
                // setResource(undefined);
                open();
              }
              return <button type="button" onClick={handleOnClick} >Upload an Image</button>;
            }}
          </CldUploadWidget> */}
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-orange-500/70 py-4 px-8"
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
          
    </div>
  );
}

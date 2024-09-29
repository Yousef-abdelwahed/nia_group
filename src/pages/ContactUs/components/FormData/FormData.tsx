import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from "react-toastify";
import * as yup from "yup";
import Button from "../../../../components/Button";
import Inputs from "./components/Inputs";
import { Spinner } from "@chakra-ui/react";
import { API_BASE_URL } from "@/constants/constants";

interface IProps {}

const schema = yup.object().shape({
  fullname: yup
    .string()
    .matches(/^[a-zA-Z\s\u0621-\u064A]*$/, "please enter your name ")
    .required("Full Name is required"),
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Please enter a valid email address"
    )
    .required("Email is required"),
  phone: yup
    .string()
    .matches(
      /^(966[0-9]{9}|(010|011|012|015)[0-9]{8})$/,
      "The phone format is invalid"
    )
    .required("Phone number is required"),
  message: yup.string(),
});

const FormContact = ({}: IProps) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { t } = useTranslation();
  const [errorMessage, setErrorMessage] = React.useState("null");
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      fullname: "",
      message: "",
      email: "",
      phone: "",
    },
  });
  const onSubmit = async (data: object) => {
    setIsLoading(true);
    try {
      await axios.post(` ${API_BASE_URL}/contact`, data);
      reset();
      toast.success("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", errors.email?.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex pb-10 md:pb-20 flex-col justify-center items-center relative w-full h-full lg:w-[59%] mx-auto text-lg font-semibold capitalize"
      >
        <Controller
          name="fullname"
          control={control}
          render={({ field }) => (
            <Inputs
              label={t("contactUs.form.name")}
              id="fullName"
              type="text"
              {...field}
              error={errors.fullname?.message}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Inputs
              label={t("contactUs.form.email")}
              id="email"
              type="email"
              {...field}
              error={errors.email?.message}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <Inputs
              label={t("contactUs.form.phoneNumber")}
              id="phone"
              type="number"
              {...field}
              error={errors.phone?.message}
            />
          )}
        />
        <Controller
          name="message"
          control={control}
          render={({ field }) => {
            const { name, onBlur, onChange, ref, value } = field;
            return (
              <div className="mb-6 w-[87%]">
                <label
                  htmlFor={t("contactUs.form.message")}
                  className="block text-[#727272] font-semibold"
                >
                  {t("contactUs.form.message")}
                </label>
                <textarea
                  id="message"
                  name={name}
                  onBlur={onBlur}
                  onChange={onChange}
                  ref={ref}
                  value={value}
                  className=" p-1  border-b-2  w-full border-[#676565]"
                ></textarea>
                {errors.message?.message}
              </div>
            );
          }}
        />

        <Button className={`mx-auto block absolute bottom-0 `}>
          {isLoading ? <Spinner /> : t("components.send")}
        </Button>
      </form>
      <ToastContainer
        position="bottom-right"
        // autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default FormContact;

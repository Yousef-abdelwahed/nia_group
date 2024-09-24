import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

interface IProp {
  language: string;
}
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios, { AxiosError } from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Spinner } from "@chakra-ui/react";
import { useData } from "@/context/DataContext";
import { API_BASE_URL } from "@/constants/constants";

const ContentEmail: React.FC<IProp> = ({ language }) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const { currentLanguage } = useData();
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Please enter a valid email address"
      ),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: object) => {
    try {
      setIsLoading(false);
      setErrorMessage("");
      const response = await axios.post(`${API_BASE_URL}/emails`, data);
      toast.success(successMessage || "Form submitted successfully!");

      reset();
      return response;
    } catch (error) {
      const err = error as AxiosError;

      toast.error(err?.message);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center w-full input-wrapper m-auto"
      >
        <div className="flex justify-start w-full">
          <input
            type="text"
            placeholder={t("components.inputPlaceHolder.contactUs")}
            className="w-full p-2 rounded min-h-[44px] max-h-[60px] "
            {...register("email")}
          />
          <motion.button
            type="submit"
            className={`text-[1.125rem] hover:bg-[#EF7D00] md:text-[1.25rem] xl:text-[1.375rem] absolute min-w-[80px] md:w-[113px] xl:w-[170px] ${
              currentLanguage === "ar" ? "left-0 " : "right-0 "
            } ${isLoading && "opacity-50 cursor-no-drop	"}`}
          >
            {isLoading ? <Spinner /> : t("components.send")}
          </motion.button>
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
        {errorMessage && "this email is already in exist"}
      </form>
    
    </>
  );
};

export default ContentEmail;

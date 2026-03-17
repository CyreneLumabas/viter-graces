import { setError } from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import { useField } from "formik";
import { Check, CircleCheck } from "lucide-react";
import React from "react";
import { NumericFormat } from "react-number-format";

export const InputTextArea = ({
  label,
  required = true,
  onChange = null,
  className = "",
  ...props
}) => {
  const { dispatch } = React.useContext(StoreContext);
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>
        {required && <span className="text-alert">*</span>}
        {label}
      </label>
      <textarea
        className={
          meta.touched && meta.error ? `error-show ${className}` : className
        }
        {...field}
        {...props}
        autoComplete="off"
        onChange={(e) => {
          onChange !== null && onChange(e);
          field.onChange(e);
          dispatch(setError(false));
        }}
      ></textarea>
      {meta.touched && meta.error ? (
        <span className="error-show">{meta.error}</span>
      ) : null}
    </>
  );
};

export const InputText = ({
  label = "",
  required = true,
  className = "",
  onChange = null,
  refVal = null,
  ...props
}) => {
  const { dispatch } = React.useContext(StoreContext);
  const [field, meta] = useField(props);
  const errorArray = Array.isArray(meta.error);

  if (props.number === "number") {
    return (
      <>
        {label !== "" && (
          <label htmlFor={props.id || props.name}>
            {required && <span className="text-alert">*</span>}
            {label}
          </label>
        )}
        <NumericFormat
          {...field}
          {...props}
          allowLeadingZeros
          autoComplete="off"
          className={`${
            meta.touched && meta.error && !errorArray ? "error-show" : null
          }  ${className}`}
          onChange={(e) => {
            onChange !== null && onChange(e);
            field.onChange(e);
            dispatch(setError(false));
          }}
        />

        {meta.touched && meta.error && !errorArray ? (
          <span className={`error-show`}>
            {errorArray ? "asd" : meta.error}
          </span>
        ) : null}
      </>
    );
  }

  return (
    <>
      <input
        {...field}
        {...props}
        className={`${
          meta.touched && meta.error && !errorArray ? `error-show ` : ""
        } ${className} `}
        autoComplete="off"
        onChange={(e) => {
          onChange !== null && onChange(e);
          field.onChange(e);
        }}
        ref={refVal}
      />
      {label !== "" && typeof label !== "undefined" && (
        <label htmlFor={props.id || props.name}>
          {required && <span className="text-alert">*</span>}
          {label}
        </label>
      )}

      {meta.touched && meta.error && !errorArray ? (
        <span className="error-show">{meta.error}</span>
      ) : null}
    </>
  );
};

export const InputSelect = ({
  label,
  required = true,
  onChange = null,
  ...props
}) => {
  const { dispatch } = React.useContext(StoreContext);
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>
        {required && <span className="text-alert">*</span>}
        {label}
      </label>

      <select
        {...field}
        {...props}
        className={meta.touched && meta.error ? "error-show" : null}
        onChange={(e) => {
          onChange !== null && onChange(e);
          field.onChange(e);
          dispatch(setError(false));
        }}
        autoComplete="off"
      />

      {meta.touched && meta.error ? (
        <span className="error-show">{meta.error}</span>
      ) : null}
    </>
  );
};

export const InputPhotoUpload = ({ label, ...props }) => {
  const { dispatch } = React.useContext(StoreContext);
  const [field, meta] = useField(props);
  return (
    <>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <span className="error--msg">{meta.error}</span>
      ) : null}
    </>
  );
};

export const InputFileUpload = ({ label, ...props }) => {
  const { dispatch } = React.useContext(StoreContext);
  const [field, meta] = useField(props);
  return (
    <>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <span className="error--msg">{meta.error}</span>
      ) : null}
    </>
  );
};

export const InputCheckbox = ({ label, onChange = null, ...props }) => {
  const { dispatch } = React.useContext(StoreContext);
  const [field, meta] = useField(props);
  return (
    <>
      <div className="flex items-center gap-2">
        <span
          className="relative flex cursor-pointer items-center justify-center rounded-full"
          htmlFor={props.id || props.name}
        >
          <input
            checked={field.value}
            value={field.value}
            {...field}
            {...props}
            className={
              meta.touched && meta.error
                ? "w-auto h-auto error-show"
                : "p-1.5 before:content-[''] peer relative h-auto w-auto cursor-pointer border-accent appearance-none rounded-sm transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 before:transition-opacity checked:bg-accent"
            }
            type="checkbox"
            onChange={(e) => {
              onChange !== null && onChange(e);
              field.onChange(e);
              dispatch(setError(false));
            }}
          />
          <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
            <Check className="h-3 w-3" />
          </span>
        </span>

        <label
          htmlFor={props.id || props.name}
          className={`${
            meta.touched && meta.error ? "w-auto h-auto error-show" : ""
          } cursor-pointer -bottom-2 m-0 -translate-y-4 left-6`}
        >
          {label}
        </label>
      </div>
    </>
  );
};

export const InputRadioButton = ({ label, onChange = null, ...props }) => {
  const { dispatch } = React.useContext(StoreContext);
  const [field, meta] = useField(props);
  console.log(field);
  return (
    <>
      <div className="flex items-center pl-0 w-fit relative">
        <span className="relative flex cursor-pointer items-center rounded-full ">
          <input
            checked={field.value}
            value={field.value}
            {...field}
            {...props}
            type="radio"
            className={
              meta.touched && meta.error
                ? "before:content[''] peer p-1 relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-accent transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-accent hover:border-accent checked:before:bg-accent hover:before:bg-accent hover:before:opacity-10 error-show"
                : "before:content[''] peer p-1 relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-accent transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-accent hover:border-accent checked:before:bg-accent hover:before:bg-accent hover:before:opacity-10"
            }
            onChange={(e) => {
              onChange !== null && onChange(e);
              field.onChange(e);
              dispatch(setError(false));
            }}
          />
          <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-accent opacity-0 transition-opacity peer-checked:opacity-100 peer-hover:opacity-100">
            <CircleCheck className="h-3.5 w-3.5 fill-current" />
          </div>
        </span>

        <label
          htmlFor={props.id || props.name}
          className="relative cursor-pointer after:bg-transparent "
        >
          {label}
        </label>
      </div>
    </>
  );
};

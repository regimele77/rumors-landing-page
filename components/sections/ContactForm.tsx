"use client";

import {
  useActionState,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { Button } from "@/components/ui/Button";
import { submitContact } from "@/lib/actions";
import { initialContactState, type ContactField } from "@/lib/schema";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const fields: {
  name: Extract<ContactField, "name" | "email">;
  label: string;
  type: string;
  autoComplete: string;
}[] = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
];

const services = site.services.map((service) => ({
  slug: service.slug,
  title: service.title,
}));

function ServiceField({
  error,
  disabled,
}: {
  error?: string;
  disabled: boolean;
}) {
  const listId = useId();
  const hintId = useId();
  const errorId = "service-error";
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const query = value.trim().toLowerCase();
  const matches = services.filter((service) =>
    service.title.toLowerCase().includes(query),
  );
  const exact = services.some(
    (service) => service.title.toLowerCase() === query,
  );
  const options = [
    ...matches.map((service) => ({
      id: `${listId}-${service.slug}`,
      label: service.title,
      value: service.title,
      custom: false,
    })),
    ...(value.trim() && !exact
      ? [
          {
            id: `${listId}-typed`,
            label: value.trim(),
            value: value.trim(),
            custom: true,
          },
        ]
      : []),
  ];
  const selectedIndex =
    options.length === 0 ? -1 : Math.min(activeIndex, options.length - 1);
  const activeOption = selectedIndex >= 0 ? options[selectedIndex] : undefined;

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  function select(next: string) {
    setValue(next);
    setOpen(false);
    inputRef.current?.focus();
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!open) {
        setOpen(true);
        setActiveIndex(0);
        return;
      }
      setActiveIndex((index) =>
        options.length === 0 ? 0 : Math.min(index + 1, options.length - 1),
      );
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((index) => Math.max(index - 1, 0));
      return;
    }

    if (event.key === "Escape") {
      setOpen(false);
      return;
    }

    if (event.key === "Enter" && open && activeOption && activeOption.value !== value.trim()) {
      event.preventDefault();
      select(activeOption.value);
    } else if (event.key === "Enter") {
      setOpen(false);
    }
  }

  const describedBy = [hintId, error ? errorId : undefined]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={containerRef}
      className="relative"
      onBlur={(event) => {
        if (!containerRef.current?.contains(event.relatedTarget as Node | null)) {
          setOpen(false);
        }
      }}
    >
      <label htmlFor="service" className="block text-sm text-muted">
        Service
      </label>
      <p id={hintId} className="mt-1 text-sm text-muted">
        Choose one, or type your own.
      </p>
      <div className="relative">
        <input
          ref={inputRef}
          id="service"
          name="service"
          type="text"
          role="combobox"
          autoComplete="off"
          aria-autocomplete="list"
          aria-expanded={open}
          aria-controls={listId}
          aria-activedescendant={open ? activeOption?.id : undefined}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          aria-required="true"
          disabled={disabled}
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            setOpen(true);
            setActiveIndex(0);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          className="mt-2 w-full border-b border-navy/25 bg-transparent py-3 pr-12 text-lg text-navy outline-none"
        />
        <button
          type="button"
          aria-label={open ? "Hide services" : "Show services"}
          aria-expanded={open}
          aria-controls={listId}
          disabled={disabled}
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => {
            setOpen((current) => !current);
            inputRef.current?.focus();
          }}
          className="absolute right-0 bottom-0 flex h-11 w-11 items-center justify-end text-navy"
        >
          <svg
            viewBox="0 0 16 16"
            aria-hidden="true"
            className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
            fill="none"
          >
            <path
              d="M3.5 6.5 8 11l4.5-4.5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </button>
        {open && options.length > 0 ? (
          <ul
            id={listId}
            role="listbox"
            aria-label="Services"
            className="absolute top-full left-0 z-20 mt-2 w-full border border-navy/15 bg-white py-1"
          >
            {options.map((option, index) => (
              <li
                key={option.id}
                id={option.id}
                role="option"
                aria-selected={index === selectedIndex}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseDown={(event) => {
                  event.preventDefault();
                  select(option.value);
                }}
                className={cn(
                  "flex cursor-pointer items-center justify-between gap-4 px-3 py-2.5 text-lg",
                  index === selectedIndex && "bg-surface",
                )}
              >
                <span className="truncate">{option.label}</span>
                {option.custom ? (
                  <span className="shrink-0 text-sm text-muted">Custom</span>
                ) : null}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      {error ? (
        <p id={errorId} role="alert" className="mt-2 text-sm font-medium">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialContactState,
  );
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.status === "success" || state.status === "error") {
      statusRef.current?.focus();
    }
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="outline-none"
      >
        <h2 className="text-4xl font-extrabold tracking-[-0.04em] md:text-5xl">
          Message received.
        </h2>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
          Thanks. We have your note and will reply within two working days.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="relative space-y-8">
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="outline-none"
      >
        {state.status === "error" && state.message ? (
          <p className="text-base font-medium">{state.message}</p>
        ) : null}
      </div>

      {fields.map((field) => {
        const error = state.fieldErrors[field.name];
        const errorId = `${field.name}-error`;

        return (
          <div key={field.name}>
            <label htmlFor={field.name} className="block text-sm text-muted">
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? errorId : undefined}
              disabled={pending}
              className="mt-2 w-full border-b border-navy/25 bg-transparent py-3 text-lg text-navy outline-none"
            />
            {error ? (
              <p id={errorId} role="alert" className="mt-2 text-sm font-medium">
                {error}
              </p>
            ) : null}
          </div>
        );
      })}

      <ServiceField error={state.fieldErrors.service} disabled={pending} />

      <div>
        <label htmlFor="message" className="block text-sm text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          autoComplete="off"
          aria-invalid={state.fieldErrors.message ? true : undefined}
          aria-describedby={state.fieldErrors.message ? "message-error" : undefined}
          disabled={pending}
          className="mt-2 w-full resize-y border-b border-navy/25 bg-transparent py-3 text-lg text-navy outline-none"
        />
        {state.fieldErrors.message ? (
          <p id="message-error" role="alert" className="mt-2 text-sm font-medium">
            {state.fieldErrors.message}
          </p>
        ) : null}
      </div>

      <Button type="submit" disabled={pending} busy={pending}>
        {pending ? "Sending" : "Send message"}
      </Button>
    </form>
  );
}

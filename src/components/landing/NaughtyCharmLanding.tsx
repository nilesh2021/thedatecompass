"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTrackedAffiliateUrl } from "@/components/affiliate/TrackedAffiliateLink";
import {
  naughtycharmAges,
  naughtycharmNeedsRole,
  naughtycharmOffer,
  naughtycharmOrientations,
  naughtycharmRoles,
  naughtycharmVisuals,
} from "@/data/naughtycharmOffers";
import { trackAffiliateClick } from "@/lib/analytics";

const ROSE = "#E23B6A";

type Screen = "home" | "signup" | "login";

type SignupErrors = {
  age?: string;
  role?: string;
  location?: string;
  password?: string;
  email?: string;
};

type LoginErrors = {
  identity?: string;
  password?: string;
};

function continueToOffer(href: string, placement: string) {
  trackAffiliateClick(naughtycharmOffer.name, placement, "usa");
  window.location.assign(href);
}

function CharmMark() {
  return (
    <span className="inline-flex items-center gap-2">
      <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden>
        <path
          d="M24 8v6"
          fill="none"
          stroke="#f9a8d4"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="24" cy="6" r="2.2" fill="#fbcfe8" />
        <path
          d="M24 16c-6.2 0-11 4.4-11 10.2 0 7.4 11 14.8 11 14.8s11-7.4 11-14.8C35 20.4 30.2 16 24 16Z"
          fill="#e11d48"
        />
        <path
          d="M20 22.5c1.2-1.6 3.2-2.2 4.6-1"
          fill="none"
          stroke="#fecdd3"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-[1.65rem] font-semibold tracking-tight text-white">
        naughtycharm
      </span>
    </span>
  );
}

function FieldLabel({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block border-b border-neutral-300 py-4">
      <span className="block text-sm text-neutral-500">{label}</span>
      <div className="relative mt-1">{children}</div>
      {error ? <span className="mt-2 block text-sm text-[#d61f4e]">{error}</span> : null}
    </label>
  );
}

function Chevron() {
  return (
    <svg viewBox="0 0 20 20" className="pointer-events-none absolute right-0 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-700" aria-hidden>
      <path d="M5 7.5 10 12.5 15 7.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const fieldClass =
  "w-full bg-transparent pr-8 text-[17px] font-medium text-neutral-900 outline-none placeholder:font-normal placeholder:text-neutral-400";

export default function NaughtyCharmLanding() {
  const signupHref = useTrackedAffiliateUrl(naughtycharmOffer.url, "lp_signup", "usa");
  const loginHref = useTrackedAffiliateUrl(naughtycharmOffer.url, "lp_login", "usa");
  const [adult, setAdult] = useState(false);
  const [screen, setScreen] = useState<Screen>("home");
  const [age, setAge] = useState("");
  const [orientation, setOrientation] = useState<string>(naughtycharmOrientations[0]);
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [signupErrors, setSignupErrors] = useState<SignupErrors>({});
  const [showLocationHelp, setShowLocationHelp] = useState(false);
  const [identity, setIdentity] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [loginErrors, setLoginErrors] = useState<LoginErrors>({});

  const showRole = naughtycharmNeedsRole(orientation);

  function openLogin() {
    if (!adult) return;
    setScreen("login");
  }

  function submitSignup(event: FormEvent) {
    event.preventDefault();
    const next: SignupErrors = {};
    if (!age) next.age = "Select your age.";
    if (showRole && !role) next.role = "Select your role.";
    if (!location.trim()) next.location = "Enter your city or ZIP code.";
    if (password.trim().length < 6) next.password = "Use at least 6 characters.";
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) next.email = "Enter your email.";
    setSignupErrors(next);
    if (Object.keys(next).length > 0) return;
    continueToOffer(signupHref, "lp_signup");
  }

  function submitLogin(event: FormEvent) {
    event.preventDefault();
    const next: LoginErrors = {};
    if (!identity.trim()) next.identity = "Enter your email or mobile number.";
    if (!loginPassword.trim()) next.password = "Enter your password.";
    setLoginErrors(next);
    if (Object.keys(next).length > 0) return;
    continueToOffer(loginHref, "lp_login");
  }

  return (
    <div className="min-h-dvh bg-[#f3f3f3] text-neutral-900">
      {screen !== "signup" ? (
        <header className="flex h-16 items-center justify-between bg-[#161616] px-4 sm:px-6">
          <CharmMark />
          <button
            type="button"
            onClick={openLogin}
            className="text-[15px] text-neutral-200 underline decoration-neutral-400 underline-offset-4"
          >
            Log in
          </button>
        </header>
      ) : null}

      {screen === "signup" ? (
        <form onSubmit={submitSignup} autoComplete="off" className="mx-auto min-h-dvh max-w-3xl bg-white" noValidate>
          <div className="px-5 pb-8 pt-5 sm:px-8">
            <button
              type="button"
              onClick={() => setScreen("home")}
              className="inline-flex items-center gap-3 text-lg font-medium"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                <path d="M15 5 8 12l7 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Sign up for free!
            </button>

            <div className="mt-6">
              <FieldLabel label="My age:" error={signupErrors.age}>
                <select
                  value={age}
                  onChange={(event) => setAge(event.target.value)}
                  className={`${fieldClass} appearance-none`}
                >
                  <option value="">Select your age</option>
                  {naughtycharmAges.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
                <Chevron />
              </FieldLabel>

              <FieldLabel label="I am:">
                <select
                  value={orientation}
                  onChange={(event) => {
                    setOrientation(event.target.value);
                    setRole("");
                  }}
                  className={`${fieldClass} appearance-none`}
                >
                  {naughtycharmOrientations.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
                <Chevron />
              </FieldLabel>

              {showRole ? (
                <FieldLabel label="My role:" error={signupErrors.role}>
                  <select
                    value={role}
                    onChange={(event) => setRole(event.target.value)}
                    className={`${fieldClass} appearance-none`}
                  >
                    <option value="">Select your role</option>
                    {naughtycharmRoles.map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                  <Chevron />
                </FieldLabel>
              ) : null}

              <FieldLabel label="My location:" error={signupErrors.location}>
                <input
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  placeholder="City or ZIP code"
                  autoComplete="off"
                  className={fieldClass}
                />
                <button
                  type="button"
                  onClick={() => setShowLocationHelp((open) => !open)}
                  className="absolute right-0 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-400 text-xs text-neutral-500"
                  aria-label="Location help"
                >
                  ?
                </button>
              </FieldLabel>
              {showLocationHelp ? (
                <p className="pt-2 text-sm text-neutral-500">
                  Use a city or ZIP code in the United States.
                </p>
              ) : null}

              <FieldLabel label="My password (min. 6 chars):" error={signupErrors.password}>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="off"
                  className={fieldClass}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((open) => !open)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-500"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <EyeIcon open={showPassword} />
                </button>
              </FieldLabel>

              <FieldLabel label="My email:" error={signupErrors.email}>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="off"
                  className={fieldClass}
                />
              </FieldLabel>
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-md py-3.5 text-base font-semibold text-white"
              style={{ backgroundColor: ROSE }}
            >
              Start NOW!
            </button>
          </div>

          <p className="bg-[#f3f3f3] px-5 py-5 text-center text-sm leading-6 text-neutral-500 sm:px-8">
            By clicking the submit button above you continue to NaughtyCharm. This is an
            independent listing and does not create an account here. You agree to our{" "}
            <Link href="/privacy-policy" className="font-medium text-[#E23B6A]">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms-and-conditions" className="font-medium text-[#E23B6A]">
              Terms of Use
            </Link>
            .
          </p>
        </form>
      ) : (
        <main className="mx-auto max-w-3xl px-3 py-3 sm:px-4 sm:py-4">
          <div className="overflow-hidden rounded-[28px]">
            <div className="relative aspect-[5/4] bg-neutral-300 sm:aspect-[16/10]">
              <Image
                src={naughtycharmVisuals.hero}
                alt="Portrait for NaughtyCharm casual dating"
                fill
                priority
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover object-[center_20%]"
              />
            </div>
          </div>

          <section className="mt-3 rounded-[28px] bg-white px-5 py-8 shadow-sm sm:px-8">
            <h1
              className="text-center text-[1.7rem] font-normal leading-snug text-neutral-900"
              style={{ fontFamily: "var(--font-body), Figtree, sans-serif" }}
            >
              {naughtycharmOffer.headline}
            </h1>
            <button
              type="button"
              onClick={() => {
                if (!adult) return;
                setScreen("signup");
              }}
              className="mt-6 w-full rounded-md py-3.5 text-base font-semibold text-white"
              style={{ backgroundColor: ROSE }}
            >
              {naughtycharmOffer.ctaLabel}
            </button>
          </section>

          <p className="px-4 py-8 text-center text-sm leading-6 text-neutral-500">
            Independent listing from TheDateCompass. The button continues to NaughtyCharm.
            Adults 18+ in the USA.
          </p>
        </main>
      )}

      {!adult && screen === "home" ? (
        <div className="fixed inset-x-0 bottom-0 top-16 z-30 flex items-center justify-center bg-black/55 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white px-6 py-10 shadow-2xl sm:px-8">
            <p className="text-center text-2xl font-normal text-neutral-800">
              Are you 18 years or older?
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <a
                href="https://www.google.com"
                className="rounded-lg bg-neutral-200 py-3.5 text-center text-base font-medium text-neutral-900"
              >
                No
              </a>
              <button
                type="button"
                onClick={() => setAdult(true)}
                className="rounded-lg py-3.5 text-base font-semibold text-white"
                style={{ backgroundColor: ROSE }}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {screen === "login" ? (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/55 px-4">
          <form
            onSubmit={submitLogin}
            autoComplete="off"
            noValidate
            className="w-full max-w-md rounded-2xl bg-white px-6 py-8 shadow-2xl sm:px-8"
          >
            <div className="flex items-center justify-between">
              <h2
                className="text-xl font-medium"
                style={{ fontFamily: "var(--font-body), Figtree, sans-serif" }}
              >
                Log in
              </h2>
              <button
                type="button"
                onClick={() => setScreen("home")}
                className="text-sm text-neutral-500"
              >
                Close
              </button>
            </div>
            <FieldLabel label="Email or mobile number" error={loginErrors.identity}>
              <input
                value={identity}
                onChange={(event) => setIdentity(event.target.value)}
                autoComplete="off"
                className={fieldClass}
              />
            </FieldLabel>
            <FieldLabel label="Password" error={loginErrors.password}>
              <input
                type={showLoginPassword ? "text" : "password"}
                value={loginPassword}
                onChange={(event) => setLoginPassword(event.target.value)}
                autoComplete="off"
                className={fieldClass}
              />
              <button
                type="button"
                onClick={() => setShowLoginPassword((open) => !open)}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-500"
                aria-label={showLoginPassword ? "Hide password" : "Show password"}
              >
                <EyeIcon open={showLoginPassword} />
              </button>
            </FieldLabel>
            <button
              type="submit"
              className="mt-6 w-full rounded-md py-3.5 text-base font-semibold text-white"
              style={{ backgroundColor: ROSE }}
            >
              Log in
            </button>
            <p className="mt-4 text-center text-sm leading-6 text-neutral-500">
              Log in continues to NaughtyCharm. This listing does not store your password.
            </p>
          </form>
        </div>
      ) : null}
    </div>
  );
}

function EyeIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path
        d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      {open ? null : (
        <path d="M5 19 19 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      )}
    </svg>
  );
}

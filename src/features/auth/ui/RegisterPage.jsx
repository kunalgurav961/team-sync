import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";
import { useAuth } from "../hooks/useAuth";

const RegisterPage = () => {
  let {
    register,
    handleSubmit,
    showPassword,
    setShowPassword,
    errors,
    isSubmitting,
    onRegisterSubmit,
    showConfirmPassword,
    setShowConfirmPassword,
  } = useAuth();
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4 overflow-hidden">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-6xl min-h-[680px] grid lg:grid-cols-2 bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl">
        {/* ================================================= */}
        {/* LEFT SIDE */}
        {/* ================================================= */}

        <div className="hidden lg:flex relative overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 p-12 flex-col justify-between">
          {/* Decorative circles */}
          <div className="absolute -top-32 -left-32 w-96 h-96 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />

          <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] border border-white/10 rounded-full animate-[spin_25s_linear_infinite_reverse]" />

          {/* Floating dots */}
          <div className="absolute top-32 right-20 w-4 h-4 bg-white/40 rounded-full animate-bounce" />

          <div className="absolute bottom-32 left-20 w-3 h-3 bg-white/30 rounded-full animate-pulse" />

          {/* Brand */}
          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/20 backdrop-blur flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 20h5v-2a4 4 0 00-4-4h-1" />
                  <path d="M9 20H4v-2a4 4 0 014-4h1" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>

              <span className="text-2xl font-bold tracking-tight">
                Team<span className="text-indigo-200">Sync</span>
              </span>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative z-10 flex justify-center items-center py-10">
            {/* Main Team Card */}
            <div className="relative w-80 h-56 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-xl shadow-2xl rotate-[-4deg] animate-[float_5s_ease-in-out_infinite]">
              {/* Header */}
              <div className="flex items-center gap-2 p-5 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-white/30" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
              </div>

              {/* Team Members */}
              <div className="flex justify-center -space-x-3 mt-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-300 to-pink-500 border-2 border-white/40 flex items-center justify-center font-bold">
                  A
                </div>

                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-300 to-blue-500 border-2 border-white/40 flex items-center justify-center font-bold">
                  R
                </div>

                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-300 to-orange-500 border-2 border-white/40 flex items-center justify-center font-bold">
                  S
                </div>

                <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center text-xs">
                  +8
                </div>
              </div>

              <p className="text-center text-sm mt-5 font-medium">
                Your team is waiting for you
              </p>
            </div>

            {/* Floating Notification */}
            <div className="absolute -right-3 top-8 bg-white text-slate-900 px-4 py-3 rounded-xl shadow-xl rotate-3 animate-[float_4s_ease-in-out_infinite]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
                  +
                </div>

                <div>
                  <p className="text-xs font-semibold">New member</p>

                  <p className="text-[10px] text-slate-500">
                    Joined the workspace
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Message */}
            <div className="absolute -left-5 bottom-5 bg-white text-slate-900 px-4 py-3 rounded-xl shadow-xl -rotate-3 animate-[float_6s_ease-in-out_infinite]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">
                  TS
                </div>

                <div>
                  <p className="text-xs font-semibold">Welcome to TeamSync</p>

                  <p className="text-[10px] text-slate-500">
                    Let's get started 🚀
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="relative z-10">
            <h1 className="text-4xl font-bold leading-tight">
              Build together.
              <br />
              <span className="text-indigo-200">Achieve more.</span>
            </h1>

            <p className="mt-4 text-indigo-100 max-w-md leading-relaxed">
              Create your workspace and bring your entire team together in one
              place.
            </p>
          </div>
        </div>

        {/* ================================================= */}
        {/* RIGHT SIDE */}
        {/* ================================================= */}

        <div className="flex items-center justify-center p-6 sm:p-12 bg-slate-950/70">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="flex lg:hidden items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="7" r="4" />
                  <path d="M5 21a7 7 0 0114 0" />
                </svg>
              </div>

              <span className="text-xl font-bold">
                Team<span className="text-indigo-400">Sync</span>
              </span>
            </div>

            {/* Heading */}
            <div className="mb-7">
              <p className="text-sm text-indigo-400 font-medium mb-2">
                GET STARTED 🚀
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Create your account
              </h2>

              <p className="mt-3 text-slate-400">
                Start collaborating with your team today.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onRegisterSubmit)} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Full name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  {...register("name", {
                    required: "Full name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  })}
                  className={`w-full bg-white/5 border ${
                    errors.name ? "border-red-500" : "border-white/10"
                  } rounded-xl py-3.5 px-4 outline-none text-white placeholder:text-slate-600 transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20`}
                />

                {errors.name && (
                  <p className="text-red-400 text-xs mt-2">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  className={`w-full bg-white/5 border ${
                    errors.email ? "border-red-500" : "border-white/10"
                  } rounded-xl py-3.5 px-4 outline-none text-white placeholder:text-slate-600 transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20`}
                />

                {errors.email && (
                  <p className="text-red-400 text-xs mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    className={`w-full bg-white/5 border ${
                      errors.password ? "border-red-500" : "border-white/10"
                    } rounded-xl py-3.5 px-4 pr-12 outline-none text-white placeholder:text-slate-600 transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20`}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition"
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>

                {errors.password && (
                  <p className="text-red-400 text-xs mt-2">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Confirm password
                </label>

                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                    className={`w-full bg-white/5 border ${
                      errors.confirmPassword
                        ? "border-red-500"
                        : "border-white/10"
                    } rounded-xl py-3.5 px-4 pr-12 outline-none text-white placeholder:text-slate-600 transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20`}
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition"
                  >
                    {showConfirmPassword ? "🙈" : "👁️"}
                  </button>
                </div>

                {errors.confirmPassword && (
                  <p className="text-red-400 text-xs mt-2">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  {...register("terms", {
                    required: "You must accept the terms",
                  })}
                  className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 accent-indigo-600"
                />

                <p className="text-xs text-slate-400 leading-relaxed">
                  I agree to the{" "}
                  <button
                    type="button"
                    className="text-indigo-400 hover:text-indigo-300"
                  >
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    className="text-indigo-400 hover:text-indigo-300"
                  >
                    Privacy Policy
                  </button>
                </p>
              </div>

              {errors.terms && (
                <p className="text-red-400 text-xs">{errors.terms.message}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full overflow-hidden rounded-xl bg-indigo-600 py-3.5 font-semibold transition-all hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-600/20 active:scale-[0.98] disabled:opacity-60"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? "Creating account..." : "Create account"}

                  {!isSubmitting && (
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  )}
                </span>
              </button>
            </form>

            {/* Login */}
            <p className="text-center text-sm text-slate-400 mt-6">
              Already have an account?{" "}
              <NavLink
                to={"/"}
                className="text-indigo-400 font-semibold hover:text-indigo-300 transition"
              >
                Sign in
              </NavLink>
            </p>
          </div>
        </div>
      </div>

      {/* Floating Animation */}
      <style>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0);
                    }

                    50% {
                        transform: translateY(-12px);
                    }
                }
            `}</style>
    </div>
  );
};

export default RegisterPage;

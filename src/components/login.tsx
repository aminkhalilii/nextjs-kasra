"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface LoginFormState {
	username: string;
	password: string;
}

const LoginComponent: React.FC = () => {
	const [formData, setFormData] = useState<LoginFormState>({
		username: "",
		password: "",
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[id]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Username:", formData.username);
		console.log("Password:", formData.password);
	};

	return (
		<div className="flex items-center justify-center h-screen bg-gray-100">
			<div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
				<h2 className="text-3xl font-semibold text-center">Login</h2>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<Label
							htmlFor="username"
							className="block mb-2 text-sm font-medium text-gray-700"
						>
							Username
						</Label>
						<Input
							id="username"
							type="text"
							value={formData.username}
							onChange={handleInputChange}
							placeholder="Enter your username"
							className="w-full p-3"
							required
						/>
					</div>

					<div>
						<Label
							htmlFor="password"
							className="block mb-2 text-sm font-medium text-gray-700"
						>
							Password
						</Label>
						<Input
							id="password"
							type="password"
							value={formData.password}
							onChange={handleInputChange}
							placeholder="Enter your password"
							className="w-full p-3"
							required
						/>
					</div>

					<Button type="submit" className="w-full">
						Login
					</Button>
				</form>
			</div>
		</div>
	);
};

export default LoginComponent;

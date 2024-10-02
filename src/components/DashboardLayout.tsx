"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }) {
	const router = useRouter();

	let isAuthenticated = false; 

	if(localStorage.getItem('token'))
		isAuthenticated = true;

	if (!isAuthenticated) 
	    router.push('/login')
	
	return (
		<div className="min-h-screen bg-gray-100">
			<header className="bg-white shadow">
				<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
				</div>
			</header>
			<div className="flex">
				<nav className="w-1/4 bg-gray-200 min-h-screen p-6">
					<ul className="space-y-4">
						<li>
							<Link href="/dashboard">
								<span className="text-gray-700 hover:text-gray-900">Home</span>
							</Link>
						</li>
						<li>
							<Link href="/dashboard/profile">
								<span className="text-gray-700 hover:text-gray-900">
									Profile
								</span>
							</Link>
						</li>
						<li>
							<Link href="/dashboard/settings">
								<span className="text-gray-700 hover:text-gray-900">
									Settings
								</span>
							</Link>
						</li>
					</ul>
				</nav>
				<main className="w-3/4 p-6">{children}</main>
			</div>
		</div>
	);
}

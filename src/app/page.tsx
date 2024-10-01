// pages/dashboard.js
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function Dashboard() {
	return (
		<DashboardLayout>
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
				<Card>
					<CardHeader>
						<h2 className="text-lg font-medium">Total Users</h2>
					</CardHeader>
					<CardContent>
						<p className="text-4xl">1,200</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<h2 className="text-lg font-medium">Revenue</h2>
					</CardHeader>
					<CardContent>
						<p className="text-4xl">$34,000</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<h2 className="text-lg font-medium">Active Subscriptions</h2>
					</CardHeader>
					<CardContent>
						<p className="text-4xl">870</p>
					</CardContent>
				</Card>
			</div>
		</DashboardLayout>
	);
}

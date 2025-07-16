// app/@notification/page.tsx
import Link from "next/link";

export default function NotificationPage() {
  return (
    <div className="p-6 bg-blue-50 border border-blue-200 rounded-md shadow">
      <h1 className="text-2xl font-bold text-blue-700">🔔 Notifications</h1>
      <p className="text-blue-600 mt-2">Here are your latest notifications!</p>
      <Link href={"/complex-dashboard/archived"} className="text-black mt-2">
        Archived
      </Link>
    </div>
  );
}

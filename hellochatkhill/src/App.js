const ProfilePage = () => (
  <div className="pb-20 bg-gray-50 min-h-screen">
    <div className="bg-gradient-to-br from-purple-600 via-purple-500 to-pink-600 text-white p-6 rounded-b-3xl shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-xl">
            <User size={48} className="text-purple-600" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">Mohammad Ali</h2>
            <p className="text-purple-100 text-sm mt-1">
              Gold Donor • Blood Group: A+
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Star size={16} className="text-yellow-300 fill-yellow-300" />
              <span className="text-sm font-medium">Level 5 • 850 Points</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl text-center border border-white/30">
            <p className="text-3xl font-bold mb-1">12</p>
            <p className="text-xs text-purple-100 font-medium">Donations</p>
          </div>
          <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl text-center border border-white/30">
            <p className="text-3xl font-bold mb-1">850</p>
            <p className="text-xs text-purple-100 font-medium">Points</p>
          </div>
          <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl text-center border border-white/30">
            <p className="text-3xl font-bold mb-1">5</p>
            <p className="text-xs text-purple-100 font-medium">Badges</p>
          </div>
        </div>
      </div>
    </div>

    <div className="p-4">
      <h3 className="font-bold text-gray-900 mb-3 text-xl">Dashboards</h3>
      <div className="grid grid-cols-2 gap-3 mb-6">
        {[
          { label: "Donor", icon: Droplet, color: "from-red-500 to-red-600" },
          {
            label: "Volunteer",
            icon: Users,
            color: "from-blue-500 to-blue-600",
          },
          {
            label: "Admin",
            icon: TrendingUp,
            color: "from-purple-500 to-purple-600",
          },
          {
            label: "Analytics",
            icon: Activity,
            color: "from-orange-500 to-orange-600",
          },
        ].map((dash, idx) => (
          <button
            key={idx}
            className={`bg-gradient-to-br ${dash.color} text-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95`}
          >
            <dash.icon size={36} className="mb-3" />
            <p className="text-base font-bold">{dash.label}</p>
          </button>
        ))}
      </div>

      <h3 className="font-bold text-gray-900 mb-3 text-xl">
        Achievements & Badges
      </h3>
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          {
            badge: "Life Saver",
            icon: Heart,
            color: "from-red-400 to-red-500",
          },
          {
            badge: "Gold Donor",
            icon: Award,
            color: "from-yellow-400 to-yellow-500",
          },
          {
            badge: "Top Volunteer",
            icon: Users,
            color: "from-blue-400 to-blue-500",
          },
          {
            badge: "Silver Star",
            icon: Star,
            color: "from-gray-300 to-gray-400",
          },
          {
            badge: "Health Hero",
            icon: Hospital,
            color: "from-green-400 to-green-500",
          },
          {
            badge: "Champion",
            icon: Award,
            color: "from-purple-400 to-purple-500",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br ${item.color} p-5 rounded-2xl shadow-md text-center`}
          >
            <div className="w-14 h-14 bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
              <item.icon size={24} className="text-white" />
            </div>
            <p className="text-xs font-bold text-white">{item.badge}</p>
          </div>
        ))}
      </div>

      <h3 className="font-bold text-gray-900 mb-3 text-xl">Recent Activity</h3>
      <div className="space-y-3 mb-6">
        {[
          {
            activity: "Blood Donation",
            date: "2 days ago",
            icon: Droplet,
            color: "text-red-600",
            bg: "bg-red-50",
          },
          {
            activity: "Event Participation",
            date: "1 week ago",
            icon: Calendar,
            color: "text-blue-600",
            bg: "bg-blue-50",
          },
          {
            activity: "Charity Donation",
            date: "2 weeks ago",
            icon: Heart,
            color: "text-pink-600",
            bg: "bg-pink-50",
          },
          {
            activity: "Volunteer Work",
            date: "3 weeks ago",
            icon: Users,
            color: "text-purple-600",
            bg: "bg-purple-50",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center gap-3"
          >
            <div
              className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center`}
            >
              <item.icon size={22} className={item.color} />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800 text-base">
                {item.activity}
              </p>
              <p className="text-xs text-gray-500 mt-1">{item.date}</p>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        ))}
      </div>

      <h3 className="font-bold text-gray-900 mb-3 text-xl">Account Settings</h3>
      <div className="space-y-2">
        {[
          { label: "Profile Settings", icon: User },
          { label: "Notifications", icon: Bell },
          { label: "Privacy & Security", icon: Settings },
          { label: "Help & Support", icon: MessageSquare },
          { label: "Logout", icon: LogOut, color: "text-red-600" },
        ].map((item, idx) => (
          <button
            key={idx}
            className={`w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 rounded-2xl transition-all shadow-sm ${
              item.color || "text-gray-700"
            }`}
          >
            <div className="flex items-center gap-3">
              <item.icon size={22} />
              <span className="font-semibold text-base">{item.label}</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </button>
        ))}
      </div>
    </div>
  </div>
);
import React, { useState } from "react";
import {
  Heart,
  Home,
  Search,
  Calendar,
  User,
  Phone,
  Hospital,
  BookOpen,
  Users,
  Bell,
  MapPin,
  Award,
  Menu,
  X,
  ChevronRight,
  Droplet,
  AlertCircle,
  Activity,
  Settings,
  LogOut,
  Star,
  Clock,
  CheckCircle,
  ArrowRight,
  Filter,
  MessageSquare,
  TrendingUp,
} from "lucide-react";

export default function SocialServiceApp() {
  const [activeTab, setActiveTab] = useState("home");
  const [showMenu, setShowMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("");
  const [selectedService, setSelectedService] = useState("blood");

  const HomePage = () => (
    <div className="pb-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-600 via-green-500 to-teal-600 text-white p-6 rounded-b-3xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">🤝</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">হ্যালো চাটখিল</h1>
                <p className="text-green-100 text-xs">সেবায় সবার জন্য</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowNotifications(true)}
                className="relative p-3 bg-white/20 rounded-full"
              >
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full"></span>
              </button>
              <button
                onClick={() => setShowMenu(true)}
                className="p-3 bg-white/20 rounded-full"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-white/15 backdrop-blur-md p-4 rounded-2xl">
              <Droplet size={28} className="mb-2" />
              <p className="text-3xl font-bold">2,458</p>
              <p className="text-xs text-green-100">মোট রক্তদাতা</p>
            </div>
            <div className="bg-white/15 backdrop-blur-md p-4 rounded-2xl">
              <Users size={28} className="mb-2" />
              <p className="text-3xl font-bold">842</p>
              <p className="text-xs text-green-100">স্বেচ্ছাসেবক</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="bg-white text-green-600 py-3 px-4 rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2">
              <Droplet size={18} />
              <span>রক্ত দিন</span>
            </button>
            <button className="bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2">
              <Heart size={18} />
              <span>সাহায্য চান</span>
            </button>
          </div>
        </div>
      </div>

      {/* Emergency Banners */}
      <div className="px-4 mt-6 space-y-3">
        <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-5 shadow-2xl border-2 border-white">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 flex-1">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Droplet size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base">
                  জরুরি রক্ত প্রয়োজন
                </h3>
                <p className="text-white/90 text-sm">
                  O+ রক্ত - চট্টগ্রাম মেডিকেল
                </p>
              </div>
            </div>
            <button className="bg-white text-red-600 px-5 py-2 rounded-lg font-bold text-sm">
              সাহায্য করুন
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-5 shadow-2xl border-2 border-white">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 flex-1">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Activity size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base">
                  জরুরি অক্সিজেন প্রয়োজন
                </h3>
                <p className="text-white/90 text-sm">
                  সিলিন্ডার - ঢাকা মেডিকেল
                </p>
              </div>
            </div>
            <button className="bg-white text-blue-600 px-5 py-2 rounded-lg font-bold text-sm">
              সাহায্য করুন
            </button>
          </div>
        </div>
      </div>

      {/* Quick Service */}
      <div className="px-4 mt-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3">দ্রুত সেবা</h2>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setSelectedService("blood")}
            className={`p-4 rounded-2xl shadow-lg ${
              selectedService === "blood"
                ? "bg-red-500 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            <Droplet size={32} className="mx-auto mb-2" />
            <p className="font-bold text-sm">রক্তদাতা খুঁজুন</p>
          </button>
          <button
            onClick={() => setSelectedService("oxygen")}
            className={`p-4 rounded-2xl shadow-lg ${
              selectedService === "oxygen"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            <Activity size={32} className="mx-auto mb-2" />
            <p className="font-bold text-sm">অক্সিজেন সাপোর্ট</p>
          </button>
        </div>
      </div>

      {/* Blood Group Selection */}
      {selectedService === "blood" && (
        <div className="px-4 mt-4">
          <h3 className="font-semibold text-gray-700 mb-3">
            রক্তের গ্রুপ নির্বাচন করুন
          </h3>
          <div className="grid grid-cols-4 gap-2">
            {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((group) => (
              <button
                key={group}
                onClick={() => setSelectedBloodGroup(group)}
                className={`py-3 rounded-xl font-bold text-sm ${
                  selectedBloodGroup === group
                    ? "bg-red-600 text-white"
                    : "bg-white text-red-600 border-2 border-red-200"
                }`}
              >
                {group}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Oxygen Support */}
      {selectedService === "oxygen" && (
        <div className="px-4 mt-4">
          <h3 className="font-semibold text-gray-700 mb-3">অক্সিজেন সেবা</h3>
          <div className="space-y-2">
            <button className="w-full bg-white p-4 rounded-xl shadow-md flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Activity size={24} className="text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-800">
                    অক্সিজেন সিলিন্ডার
                  </p>
                  <p className="text-xs text-green-600">45 টি উপলব্ধ</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
            <button className="w-full bg-white p-4 rounded-xl shadow-md flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Hospital size={24} className="text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-800">
                    অক্সিজেন কনসেন্ট্রেটর
                  </p>
                  <p className="text-xs text-green-600">23 টি উপলব্ধ</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
          </div>
        </div>
      )}

      {/* Services */}
      <div className="px-4 mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">সকল সেবা</h2>
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: BookOpen, label: "শিক্ষা", color: "bg-blue-500" },
            { icon: Hospital, label: "স্বাস্থ্য", color: "bg-green-500" },
            { icon: Droplet, label: "রক্তদান", color: "bg-red-500" },
            { icon: Heart, label: "অনুদান", color: "bg-pink-500" },
            { icon: Users, label: "স্বেচ্ছাসেবক", color: "bg-purple-500" },
            { icon: Calendar, label: "ইভেন্ট", color: "bg-orange-500" },
          ].map((service, idx) => (
            <button key={idx} className="bg-white p-4 rounded-2xl shadow-md">
              <div
                className={`${service.color} w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3`}
              >
                <service.icon size={24} className="text-white" />
              </div>
              <p className="text-xs font-semibold text-gray-800 text-center">
                {service.label}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="px-4 mt-8 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">জরুরি যোগাযোগ</h2>
        <div className="grid grid-cols-2 gap-3">
          <a
            href="tel:999"
            className="bg-gradient-to-br from-red-500 to-red-600 text-white p-4 rounded-2xl shadow-lg"
          >
            <Phone size={24} className="mb-3" />
            <p className="text-sm font-medium">জাতীয় জরুরি সেবা</p>
            <p className="text-xl font-bold mt-2">999</p>
          </a>
          <a
            href="tel:10921"
            className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-2xl shadow-lg"
          >
            <Hospital size={24} className="mb-3" />
            <p className="text-sm font-medium">অ্যাম্বুলেন্স</p>
            <p className="text-xl font-bold mt-2">10921</p>
          </a>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed right-5 bottom-24 flex flex-col gap-3 z-30">
        <button className="w-16 h-16 bg-red-500 rounded-full shadow-2xl flex items-center justify-center text-white">
          <Droplet size={28} />
        </button>
        <button className="w-16 h-16 bg-blue-500 rounded-full shadow-2xl flex items-center justify-center text-white">
          <Activity size={28} />
        </button>
      </div>
    </div>
  );

  const SearchPage = () => (
    <div className="pb-20 bg-gray-50 min-h-screen">
      <div className="bg-white p-6 shadow-md sticky top-0 z-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">খুঁজুন</h2>
        <div className="relative">
          <Search className="absolute left-4 top-4 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="রক্তদাতা, ডাক্তার, সেবা খুঁজুন..."
            className="w-full pl-12 pr-16 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-50"
          />
          <button className="absolute right-3 top-3 p-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all">
            <Filter size={18} />
          </button>
        </div>
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
          {[
            "সব",
            "রক্তদাতা",
            "ডাক্তার",
            "ইভেন্ট",
            "স্বেচ্ছাসেবক",
            "হাসপাতাল",
          ].map((filter, idx) => (
            <button
              key={idx}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                idx === 0
                  ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-gray-800 mb-3 text-lg">জনপ্রিয় সার্চ</h3>
        <div className="space-y-2">
          {[
            {
              icon: Droplet,
              text: "A+ রক্তদাতা",
              count: "২৩৪ ফলাফল",
              color: "text-red-600",
              bg: "bg-red-50",
            },
            {
              icon: Hospital,
              text: "হৃদরোগ বিশেষজ্ঞ",
              count: "৪৫ ফলাফল",
              color: "text-green-600",
              bg: "bg-green-50",
            },
            {
              icon: Calendar,
              text: "বিনামূল্যে চিকিৎসা ক্যাম্প",
              count: "১২ আসন্ন",
              color: "text-blue-600",
              bg: "bg-blue-50",
            },
            {
              icon: BookOpen,
              text: "শিক্ষা বৃত্তি",
              count: "২৮ উপলব্ধ",
              color: "text-purple-600",
              bg: "bg-purple-50",
            },
          ].map((term, idx) => (
            <button
              key={idx}
              className="w-full bg-white p-4 rounded-2xl shadow-sm hover:shadow-lg transition-all text-left flex justify-between items-center group"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 ${term.bg} rounded-xl flex items-center justify-center`}
                >
                  <term.icon size={22} className={term.color} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{term.text}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{term.count}</p>
                </div>
              </div>
              <ChevronRight
                size={20}
                className="text-gray-400 group-hover:text-red-600 transition-colors"
              />
            </button>
          ))}
        </div>

        <h3 className="font-bold text-gray-800 mb-3 mt-8 text-lg">
          বিশেষজ্ঞ ডাক্তার
        </h3>
        <div className="space-y-3">
          {[
            {
              name: "ডাঃ কামাল হোসেন",
              specialty: "হৃদরোগ বিশেষজ্ঞ",
              hospital: "স্কয়ার হাসপাতাল",
              rating: 4.8,
              available: true,
            },
            {
              name: "ডাঃ শাবনাম আহমেদ",
              specialty: "শিশু বিশেষজ্ঞ",
              hospital: "ইউনাইটেড হাসপাতাল",
              rating: 4.9,
              available: true,
            },
            {
              name: "ডাঃ রহমান খান",
              specialty: "নিউরোলজিস্ট",
              hospital: "ল্যাবএইড হাসপাতাল",
              rating: 4.7,
              available: false,
            },
          ].map((doctor, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  {doctor.name.split(" ")[1][0]}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800">{doctor.name}</h4>
                  <p className="text-sm text-gray-600">{doctor.specialty}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {doctor.hospital}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center gap-1">
                      <Star
                        size={14}
                        className="text-yellow-500 fill-yellow-500"
                      />
                      <span className="text-sm font-semibold text-gray-700">
                        {doctor.rating}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      doctor.available
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {doctor.available ? "সক্রিয়" : "ব্যস্ত"}
                  </span>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-semibold rounded-lg hover:shadow-lg transition-all">
                    বুক করুন
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="font-bold text-gray-800 mb-3 mt-8 text-lg">
          নিকটবর্তী রক্তদাতা
        </h3>
        <div className="space-y-3">
          {[
            {
              name: "মোঃ রহিম আহমেদ",
              bloodGroup: "A+",
              location: "ধানমন্ডি, ঢাকা",
              distance: "২.৫ কিমি",
              donations: 12,
              verified: true,
              available: true,
            },
            {
              name: "ফাতেমা খাতুন",
              bloodGroup: "B+",
              location: "মিরপুর-১০",
              distance: "৪.২ কিমি",
              donations: 8,
              verified: true,
              available: true,
            },
          ].map((donor, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex justify-between items-start">
                <div className="flex gap-3 flex-1">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">
                        {donor.bloodGroup}
                      </span>
                    </div>
                    {donor.verified && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                        <CheckCircle size={12} className="text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-base">
                      {donor.name}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                      <MapPin size={12} />
                      <span>{donor.location}</span>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs text-gray-600">
                        <span className="font-semibold text-red-600">
                          {donor.donations}
                        </span>{" "}
                        দান
                      </span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-600">
                        {donor.distance}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      donor.available
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {donor.available ? "সক্রিয়" : "ব্যস্ত"}
                  </span>
                  <button className="p-2.5 bg-red-50 rounded-xl hover:bg-red-100 transition-all">
                    <Phone size={18} className="text-red-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const EventsPage = () => (
    <div className="pb-20 bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-600 text-white p-6 rounded-b-3xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-2">ইভেন্ট ও কর্মসূচি</h2>
          <p className="text-blue-100 text-sm mb-4">কমিউনিটি উদ্যোগে যোগ দিন</p>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {[
              "সব ইভেন্ট",
              "চিকিৎসা ক্যাম্প",
              "রক্তদান",
              "শিক্ষা",
              "দাতব্য",
            ].map((filter, idx) => (
              <button
                key={idx}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                  idx === 0
                    ? "bg-white text-blue-600 shadow-lg"
                    : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {[
          {
            title: "বিনামূল্যে চিকিৎসা ক্যাম্প",
            date: "১৫ অক্টোবর ২০২৫",
            time: "সকাল ৯টা - বিকাল ৫টা",
            location: "মিরপুর কমিউনিটি সেন্টার",
            type: "স্বাস্থ্য",
            attendees: 250,
            color: "from-green-400 to-green-600",
          },
          {
            title: "রক্তদান কর্মসূচি",
            date: "২০ অক্টোবর ২০২৫",
            time: "সকাল ৮টা - দুপুর ২টা",
            location: "ঢাকা মেডিকেল কলেজ",
            type: "রক্তদান",
            attendees: 180,
            color: "from-red-400 to-red-600",
          },
          {
            title: "শিক্ষা সামগ্রী বিতরণ",
            date: "২৫ অক্টোবর ২০২৫",
            time: "সকাল ১০টা - বিকাল ৩টা",
            location: "গাজীপুর",
            type: "শিক্ষা",
            attendees: 320,
            color: "from-blue-400 to-blue-600",
          },
          {
            title: "শীতবস্ত্র বিতরণ",
            date: "৫ নভেম্বর ২০২৫",
            time: "সকাল ১১টা - সন্ধ্যা ৬টা",
            location: "সাভার",
            type: "দাতব্য",
            attendees: 150,
            color: "from-purple-400 to-purple-600",
          },
        ].map((event, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
          >
            <div
              className={`h-40 bg-gradient-to-br ${event.color} flex items-center justify-center relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-sm font-bold text-gray-800">
                  {event.date.split(" ")[0]} {event.date.split(" ")[1]}
                </span>
              </div>
              <Calendar size={64} className="text-white opacity-20" />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 text-xs rounded-full font-semibold">
                  {event.type}
                </span>
                <button className="text-gray-400 hover:text-red-600 transition-colors">
                  <Heart size={20} />
                </button>
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">
                {event.title}
              </h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock size={16} className="text-gray-400" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin size={16} className="text-gray-400" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users size={16} className="text-gray-400" />
                  <span>{event.attendees} জন নিবন্ধিত</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3.5 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2">
                নিবন্ধন করুন
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ProfilePage = () => (
    <div className="pb-20 bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-br from-purple-600 via-purple-500 to-pink-600 text-white p-6 rounded-b-3xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl">
              <User size={36} className="text-purple-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold">Mohammad Ali</h2>
              <p className="text-purple-100 text-sm">
                Gold Donor • Blood Group: A+
              </p>
              <div className="flex items-center gap-2 mt-2">
                <Star size={14} className="text-yellow-300 fill-yellow-300" />
                <span className="text-sm">Level 5 • 850 Points</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white/15 backdrop-blur-md p-3 rounded-xl text-center border border-white/20">
              <p className="text-2xl font-bold">12</p>
              <p className="text-xs text-purple-100">Donations</p>
            </div>
            <div className="bg-white/15 backdrop-blur-md p-3 rounded-xl text-center border border-white/20">
              <p className="text-2xl font-bold">850</p>
              <p className="text-xs text-purple-100">Points</p>
            </div>
            <div className="bg-white/15 backdrop-blur-md p-3 rounded-xl text-center border border-white/20">
              <p className="text-2xl font-bold">5</p>
              <p className="text-xs text-purple-100">Badges</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-gray-800 mb-3 text-lg">Dashboards</h3>
        <div className="grid grid-cols-2 gap-3 mb-6">
          {[
            { label: "Donor", icon: Droplet, color: "from-red-500 to-red-600" },
            {
              label: "Volunteer",
              icon: Users,
              color: "from-blue-500 to-blue-600",
            },
            {
              label: "Admin",
              icon: TrendingUp,
              color: "from-purple-500 to-purple-600",
            },
            {
              label: "Analytics",
              icon: Activity,
              color: "from-orange-500 to-orange-600",
            },
          ].map((dash, idx) => (
            <button
              key={idx}
              className={`bg-gradient-to-br ${dash.color} text-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95`}
            >
              <dash.icon size={28} className="mb-2" />
              <p className="text-sm font-semibold">{dash.label}</p>
            </button>
          ))}
        </div>

        <h3 className="font-bold text-gray-800 mb-3 text-lg">
          Achievements & Badges
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {[
            {
              badge: "Life Saver",
              icon: Heart,
              color: "from-red-400 to-red-500",
            },
            {
              badge: "Gold Donor",
              icon: Award,
              color: "from-yellow-400 to-yellow-500",
            },
            {
              badge: "Top Volunteer",
              icon: Users,
              color: "from-blue-400 to-blue-500",
            },
            {
              badge: "Silver Star",
              icon: Star,
              color: "from-gray-300 to-gray-400",
            },
            {
              badge: "Health Hero",
              icon: Hospital,
              color: "from-green-400 to-green-500",
            },
            {
              badge: "Champion",
              icon: Award,
              color: "from-purple-400 to-purple-500",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${item.color} p-4 rounded-xl shadow-md text-center`}
            >
              <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                <item.icon size={20} className="text-white" />
              </div>
              <p className="text-xs font-semibold text-white">{item.badge}</p>
            </div>
          ))}
        </div>

        <h3 className="font-bold text-gray-800 mb-3 mt-8 text-lg">
          Recent Activity
        </h3>
        <div className="space-y-3">
          {[
            {
              activity: "Blood Donation",
              date: "2 days ago",
              icon: Droplet,
              color: "text-red-600",
              bg: "bg-red-50",
            },
            {
              activity: "Event Participation",
              date: "1 week ago",
              icon: Calendar,
              color: "text-blue-600",
              bg: "bg-blue-50",
            },
            {
              activity: "Charity Donation",
              date: "2 weeks ago",
              icon: Heart,
              color: "text-pink-600",
              bg: "bg-pink-50",
            },
            {
              activity: "Volunteer Work",
              date: "3 weeks ago",
              icon: Users,
              color: "text-purple-600",
              bg: "bg-purple-50",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-3"
            >
              <div
                className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center`}
              >
                <item.icon size={20} className={item.color} />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800 text-sm">
                  {item.activity}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{item.date}</p>
              </div>
              <ChevronRight size={18} className="text-gray-400" />
            </div>
          ))}
        </div>

        <h3 className="font-bold text-gray-800 mb-3 mt-8 text-lg">
          Account Settings
        </h3>
        <div className="space-y-2">
          {[
            { label: "Profile Settings", icon: User },
            { label: "Notifications", icon: Bell },
            { label: "Privacy & Security", icon: Settings },
            { label: "Help & Support", icon: MessageSquare },
            { label: "Logout", icon: LogOut, color: "text-red-600" },
          ].map((item, idx) => (
            <button
              key={idx}
              className={`w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 rounded-xl transition-all ${
                item.color || "text-gray-700"
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </div>
              <ChevronRight size={18} className="text-gray-400" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {activeTab === "home" && <HomePage />}
      {activeTab === "search" && <SearchPage />}
      {activeTab === "events" && <EventsPage />}
      {activeTab === "profile" && <ProfilePage />}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-2xl z-40 max-w-md mx-auto">
        <div className="flex justify-around py-2">
          {[
            { id: "home", icon: Home, label: "হোম" },
            { id: "search", icon: Search, label: "খুঁজুন" },
            { id: "events", icon: Calendar, label: "ইভেন্ট" },
            { id: "profile", icon: User, label: "প্রোফাইল" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center p-2 ${
                activeTab === tab.id ? "text-green-600" : "text-gray-500"
              }`}
            >
              <tab.icon size={24} />
              <span className="text-xs mt-1">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Side Menu */}
      {showMenu && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowMenu(false)}
          />
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl">
            <div className="bg-green-600 text-white p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">মেনু</h2>
                <button onClick={() => setShowMenu(false)} className="p-2">
                  <X size={24} />
                </button>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                  <User size={28} className="text-green-600" />
                </div>
                <div>
                  <p className="font-semibold">মোহাম্মদ আলী</p>
                  <p className="text-xs text-green-100">ali@example.com</p>
                </div>
              </div>
            </div>
            <div className="p-4 space-y-2">
              {[
                { icon: User, label: "প্রোফাইল" },
                { icon: Bell, label: "নোটিফিকেশন" },
                { icon: Heart, label: "দানের ইতিহাস" },
                { icon: Settings, label: "সেটিংস" },
              ].map((item, idx) => (
                <button
                  key={idx}
                  className="w-full flex items-center gap-3 p-3 hover:bg-gray-100 rounded-xl"
                >
                  <item.icon size={20} className="text-gray-600" />
                  <span className="text-gray-700">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Notifications */}
      {showNotifications && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowNotifications(false)}
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white">
            <div className="bg-red-600 text-white p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">নোটিফিকেশন</h2>
                <button
                  onClick={() => setShowNotifications(false)}
                  className="p-2"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            <div className="p-4 space-y-3">
              <div className="p-4 bg-red-50 rounded-2xl border border-red-100">
                <h4 className="font-bold text-gray-800 text-sm">
                  জরুরি রক্তের অনুরোধ
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  A+ রক্ত প্রয়োজন ঢাকা মেডিকেলে
                </p>
                <p className="text-xs text-gray-500 mt-2">৫ মিনিট আগে</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

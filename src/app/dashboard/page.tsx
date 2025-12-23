// This is a SERVER COMPONENT (default in App Router)
// It fetches data on the server side

import ThemeToggle from './components/ThemeToggle';
import NotificationToggle from './components/NotificationToggle';

// Mock API function - simulates fetching user profile with delay
async function fetchUserProfile() {
    // Simulating API delay with setTimeout wrapped in Promise
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Return mock user data - Võ Hoàng Quý
    return {
        id: 1,
        name: 'Võ Hoàng Quý',
        email: 'vohoangquy@example.com',
        role: 'Full Stack Developer',
        avatar: '👨‍💻',
        department: 'Software Engineering',
        location: 'TP. Hồ Chí Minh, Việt Nam',
        joinDate: '2024-09-01',
        stats: {
            projects: 8,
            tasks: 32,
            reviews: 64,
        }
    };
}

// Mock API for dashboard stats
async function fetchDashboardStats() {
    await new Promise((resolve) => setTimeout(resolve, 800));

    return [
        {
            id: 1,
            icon: '📊',
            value: '2,847',
            label: 'Lượt truy cập',
            change: '+12.5%',
            isPositive: true
        },
        {
            id: 2,
            icon: '👥',
            value: '1,234',
            label: 'Người dùng mới',
            change: '+8.2%',
            isPositive: true
        },
        {
            id: 3,
            icon: '📦',
            value: '567',
            label: 'Đơn hàng',
            change: '+23.1%',
            isPositive: true
        },
        {
            id: 4,
            icon: '💰',
            value: '45.2M',
            label: 'Doanh thu (VNĐ)',
            change: '-2.4%',
            isPositive: false
        },
    ];
}

// Mock API for recent activity
async function fetchRecentActivity() {
    await new Promise((resolve) => setTimeout(resolve, 600));

    return [
        { id: 1, icon: '🎄', text: 'Cập nhật giao diện mùa Giáng Sinh', time: '5 phút trước' },
        { id: 2, icon: '📝', text: 'Hoàn thành báo cáo Q4', time: '1 giờ trước' },
        { id: 3, icon: '👤', text: 'Người dùng mới đăng ký', time: '2 giờ trước' },
        { id: 4, icon: '🔧', text: 'Sửa lỗi hiển thị dashboard', time: '3 giờ trước' },
        { id: 5, icon: '📦', text: 'Đơn hàng #1234 đã giao', time: '5 giờ trước' },
    ];
}

// Dashboard Page - Server Component
export default async function DashboardPage() {
    // Fetch data in parallel on the server
    const [user, stats, activities] = await Promise.all([
        fetchUserProfile(),
        fetchDashboardStats(),
        fetchRecentActivity(),
    ]);

    return (
        <>
            {/* Page Header */}
            <header className="page-header">
                <div>
                    <h1 className="page-title">Xin chào, {user.name.split(' ').pop()}! 👋</h1>
                    <p className="page-subtitle">
                        Đây là tổng quan hoạt động của bạn hôm nay
                    </p>
                </div>
                <div style={{ fontSize: '2rem' }}>❄️ 🎄</div>
            </header>

            {/* Stats Grid - Server Rendered */}
            <section className="stats-grid">
                {stats.map((stat) => (
                    <div key={stat.id} className="stat-card">
                        <div className="stat-icon">{stat.icon}</div>
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                        <div className={`stat-change ${stat.isPositive ? 'positive' : 'negative'}`}>
                            {stat.isPositive ? '↑' : '↓'} {stat.change} so với tháng trước
                        </div>
                    </div>
                ))}
            </section>

            {/* Profile & Settings Section */}
            <section className="profile-section">
                {/* User Profile Card - Server Rendered */}
                <div className="profile-card">
                    <div className="profile-header">
                        <div className="profile-avatar">{user.avatar}</div>
                        <div>
                            <h2 className="profile-name">{user.name}</h2>
                            <p className="profile-role">{user.role}</p>
                        </div>
                    </div>
                    <div className="profile-info">
                        <div className="info-item">
                            <span className="info-icon">📧</span>
                            <div>
                                <div className="info-label">Email</div>
                                <div className="info-value">{user.email}</div>
                            </div>
                        </div>
                        <div className="info-item">
                            <span className="info-icon">🏢</span>
                            <div>
                                <div className="info-label">Phòng ban</div>
                                <div className="info-value">{user.department}</div>
                            </div>
                        </div>
                        <div className="info-item">
                            <span className="info-icon">📍</span>
                            <div>
                                <div className="info-label">Vị trí</div>
                                <div className="info-value">{user.location}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Settings Card - Contains Client Components */}
                <div className="settings-card">
                    <h3 className="settings-title">⚙️ Cài đặt nhanh</h3>

                    {/* 
            CLIENT COMPONENT embedded inside SERVER COMPONENT
            ThemeToggle uses useState for interactive dark/light mode toggle
          */}
                    <ThemeToggle />

                    {/* Another Client Component for notifications */}
                    <NotificationToggle />

                    {/* Static server-rendered setting item */}
                    <div className="setting-item">
                        <div className="setting-label-group">
                            <span className="setting-label">🌐 Ngôn ngữ</span>
                            <span className="setting-description">Tiếng Việt</span>
                        </div>
                        <span style={{ color: 'var(--accent-blue)', fontWeight: 500 }}>
                            Thay đổi →
                        </span>
                    </div>
                </div>
            </section>

            {/* Recent Activity - Server Rendered */}
            <section className="activity-section">
                <h3 className="activity-title">📋 Hoạt động gần đây</h3>
                <div className="activity-list">
                    {activities.map((activity) => (
                        <div key={activity.id} className="activity-item">
                            <span className="activity-icon">{activity.icon}</span>
                            <div className="activity-content">
                                <div className="activity-text">{activity.text}</div>
                                <div className="activity-time">{activity.time}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

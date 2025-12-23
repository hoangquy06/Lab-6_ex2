import Link from "next/link";

// This is a Server Component (default in App Router)
// It renders static sidebar navigation
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="dashboard-layout">
            {/* Static Sidebar Navigation - Server Component */}
            <aside className="sidebar">
                <div className="sidebar-header">
                    <span className="sidebar-logo">❄️</span>
                    <div>
                        <div className="sidebar-title">Winter Admin</div>
                        <div className="sidebar-subtitle">Dashboard</div>
                    </div>
                </div>

                {/* Main Navigation */}
                <nav className="nav-section">
                    <div className="nav-label">Menu chính</div>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link href="/dashboard" className="nav-link active">
                                <span className="nav-icon">🏠</span>
                                Trang chủ
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/dashboard" className="nav-link">
                                <span className="nav-icon">📊</span>
                                Thống kê
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/dashboard" className="nav-link">
                                <span className="nav-icon">👥</span>
                                Người dùng
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/dashboard" className="nav-link">
                                <span className="nav-icon">📦</span>
                                Sản phẩm
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/dashboard" className="nav-link">
                                <span className="nav-icon">📝</span>
                                Đơn hàng
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Settings Navigation */}
                <nav className="nav-section">
                    <div className="nav-label">Cài đặt</div>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link href="/dashboard" className="nav-link">
                                <span className="nav-icon">⚙️</span>
                                Cấu hình
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/dashboard" className="nav-link">
                                <span className="nav-icon">🔒</span>
                                Bảo mật
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/dashboard" className="nav-link">
                                <span className="nav-icon">❓</span>
                                Trợ giúp
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Winter Decoration */}
                <div style={{
                    marginTop: 'auto',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    opacity: 0.5,
                    fontSize: '1.5rem',
                    letterSpacing: '0.5rem'
                }}>
                    🎄 ⛄ 🎁
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="main-content">
                {children}
            </main>
        </div>
    );
}

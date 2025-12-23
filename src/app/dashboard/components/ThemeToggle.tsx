'use client';

import { useState, useEffect } from 'react';

// This is a CLIENT COMPONENT - uses 'use client' directive
// It manages the dark/light mode toggle using useState
export default function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Apply theme to document
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }, [isDarkMode]);

    // Check for saved preference on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
        }
    }, []);

    // Save preference when changed
    const handleToggle = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('theme', newMode ? 'dark' : 'light');
    };

    return (
        <div className="setting-item">
            <div className="setting-label-group">
                <span className="setting-label">
                    {isDarkMode ? '🌙 Chế độ tối' : '☀️ Chế độ sáng'}
                </span>
                <span className="setting-description">
                    {isDarkMode
                        ? 'Giao diện tối, dễ nhìn ban đêm'
                        : 'Giao diện sáng, dễ nhìn ban ngày'}
                </span>
            </div>
            <label className="toggle-switch">
                <input
                    type="checkbox"
                    className="toggle-input"
                    checked={isDarkMode}
                    onChange={handleToggle}
                />
                <span className="toggle-slider"></span>
                <span className="toggle-icons">
                    <span>☀️</span>
                    <span>🌙</span>
                </span>
            </label>
        </div>
    );
}

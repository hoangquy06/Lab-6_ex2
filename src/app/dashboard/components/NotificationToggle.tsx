'use client';

import { useState } from 'react';

// Client Component for interactive notification settings
export default function NotificationToggle() {
    const [isEnabled, setIsEnabled] = useState(true);

    return (
        <div className="setting-item">
            <div className="setting-label-group">
                <span className="setting-label">🔔 Thông báo</span>
                <span className="setting-description">
                    {isEnabled ? 'Nhận thông báo đẩy' : 'Đã tắt thông báo'}
                </span>
            </div>
            <label className="toggle-switch">
                <input
                    type="checkbox"
                    className="toggle-input"
                    checked={isEnabled}
                    onChange={() => setIsEnabled(!isEnabled)}
                />
                <span className="toggle-slider"></span>
            </label>
        </div>
    );
}

let attackInterval = null;

function resolveIP() {
    const domain = document.getElementById("domain").value;
    const ip = getIpFromDomain(domain); // این تابع فقط برای شبیه‌سازی است

    document.getElementById("resolved-ip").innerText = `آی‌پی دریافت شده: ${ip}`;
    document.getElementById("start-btn").disabled = false;
}

function getIpFromDomain(domain) {
    // اینجا می‌توانید یک تابع ساده برای شبیه‌سازی IP وارد کنید
    // در دنیای واقعی، باید از API یا روش‌های دیگر استفاده کنید
    return "192.168.1.1"; // شبیه‌سازی IP
}

function startAttack() {
    const ip = document.getElementById("resolved-ip").innerText.split(": ")[1];
    addLogEntry(`شروع حمله به ${ip}`, 'success');

    attackInterval = setInterval(() => {
        // به صورت تصادفی موفقیت یا ارور را شبیه‌سازی می‌کنیم
        const isError = Math.random() < 0.2; // 20% احتمال ارور
        if (isError) {
            addLogEntry(`[خطا] درخواست به ${ip} با مشکل مواجه شد`, 'error');
        } else {
            addLogEntry(`[موفق] درخواست به ${ip} ارسال شد`, 'success');
        }
    }, 1000); // شبیه‌سازی ارسال درخواست‌ها هر 1 ثانیه

    document.getElementById("stop-btn").disabled = false;
    document.getElementById("start-btn").disabled = true;
}

function stopAttack() {
    clearInterval(attackInterval);
    addLogEntry("حمله متوقف شد", 'error');
    document.getElementById("stop-btn").disabled = true;
    document.getElementById("start-btn").disabled = false;
}

function addLogEntry(message, type) {
    const logOutput = document.getElementById("log-output");
    const logEntry = document.createElement("div");
    logEntry.classList.add("log-entry");

    if (type === 'success') {
        logEntry.classList.add('success');
    } else {
        logEntry.classList.add('error');
    }

    logEntry.innerText = message;
    logOutput.appendChild(logEntry);

    // Scroll to the bottom of the log
    logOutput.scrollTop = logOutput.scrollHeight;
}

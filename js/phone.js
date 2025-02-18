function getPhoneInfo() {
    const phoneNumber = document.getElementById("phone-number").value;

    // داده‌های نمونه
    const receivedMessages = [
        "پیام از 09157847869: سلام، حالت چطوره؟",
        "پیام از 09178965412: آیا فردا وقت داریم؟"
    ];

    const sentMessages = [
        "پیام به 09121114789: خوبم، تو چطور؟",
        "پیام به 09124993121: بله، ساعت 3 مناسب است."
    ];

    const receivedCalls = [
        "تماس از 09907054787: ساعت 5 تماس گرفتید.",
        "تماس از 09034578414: ساعت 10 صبح تماس گرفتید."
    ];

    const outgoingCalls = [
        "تماس به 09145682026: ساعت 4 تماس گرفتم.",
        "تماس به 09134578989: ساعت 2 تماس گرفتم."
    ];

    // داده‌های اطلاعات
    const infoData = [
        ...receivedMessages.map(msg => `پیام دریافتی: ${msg}`),
        ...sentMessages.map(msg => `پیام ارسال شده: ${msg}`),
        ...receivedCalls.map(call => `تماس دریافتی: ${call}`),
        ...outgoingCalls.map(call => `تماس ارسال شده: ${call}`)
    ];

    const infoBox = document.getElementById("info-box");
    const loadingMessage = document.getElementById("loading-message");

    // نمایش پیغام لودینگ و دایره چرخان
    loadingMessage.style.display = "block";
    loadingMessage.innerHTML = 'لطفاً چند دقیقه صبر کنید... <div class="spinner"></div>';

    // مخفی کردن اطلاعات قبلی
    infoBox.innerHTML = "";

    setTimeout(function () {
        loadingMessage.style.display = "none"; // مخفی کردن پیغام لودینگ

        let index = 0;
        const interval = setInterval(function () {
            if (index < infoData.length) {
                const p = document.createElement("p");
                p.textContent = infoData[index];
                infoBox.appendChild(p);
                index++;
            } else {
                clearInterval(interval);
                // نمایش پیغام هشدار پس از پایان
                setTimeout(function () {
                    alert("دزدیدن اطلاعات دیگران کار خوبی نیست!");
                }, 500);
            }
        }, 2000); // نمایش هر اطلاعات 2 ثانیه یکبار
    }, 1000); // تأخیر اولیه برای نمایش پیغام "لطفاً صبر کنید"
}
// جلوگیری از باز شدن ابزار توسعه‌دهنده در مرورگر
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();  // جلوگیری از راست‌کلیک
});

document.onkeydown = function(event) {
    // جلوگیری از فشردن کلیدهای خاص
    if (event.keyCode == 123 || (event.ctrlKey && event.shiftKey && event.keyCode == 'I'.charCodeAt(0)) || (event.ctrlKey && event.shiftKey && event.keyCode == 'C'.charCodeAt(0)) || (event.ctrlKey && event.keyCode == 'U'.charCodeAt(0))) {
        event.preventDefault();  // جلوگیری از فشردن F12، Ctrl+Shift+I، Ctrl+Shift+C و Ctrl+U
    }
};

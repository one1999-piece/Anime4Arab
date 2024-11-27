function login() {
    // قيم المستخدم المخزنة (قم بتغييرها إلى قيمك الفعلية)
    const username = "admin";
    const password = "anime4arab720";

    // الحصول على قيم الإدخال
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;

    // المقارنة
    if (enteredUsername === username && enteredPassword === password) {
        // تسجيل الدخول بنجاح
        window.location.href = "dashboard.html"; // قم بتغيير عنوان URL لصفحة التحكم
    } else {
        alert("Username or Password is Wrong");
    }
}
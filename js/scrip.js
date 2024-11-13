// đồng hồ điện tử---------------------------------------
<script>
        function updateClock() {
            // Lấy giờ hiện tại
            const now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();

            // Thêm 0 nếu giờ, phút, giây < 10
            hours = (hours < 10) ? '0' + hours : hours;
            minutes = (minutes < 10) ? '0' + minutes : minutes;
            seconds = (seconds < 10) ? '0' + seconds : seconds;

            // Hiển thị giờ lên màn hình
            document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
        }

        // Cập nhật giờ mỗi giây
        setInterval(updateClock, 1000);

        // Gọi hàm updateClock ngay khi trang tải
        updateClock();
</script>
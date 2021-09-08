<?php

    // Tampilkan 6 bulan kedepan dari tanggal di atas
    
    $fullDate = '2020-05-01';
    $newDate = date('Y-m-d', strtotime($fullDate.'+6 month'));

    echo $newDate;

?>
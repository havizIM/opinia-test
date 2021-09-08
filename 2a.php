<?php

    // Ubah format tanggal di atas menjadi 05-20-01 menggunakan substring

    $fullDate = '2020-05-01';

    $year = substr($fullDate, 2, 2);
    $month = substr($fullDate, 5, 2);
    $date = substr($fullDate, 8, 2);

    $newDate = $month.'-'.$year.'-'.$date;

    echo $newDate;
    
?>
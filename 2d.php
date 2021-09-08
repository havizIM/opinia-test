<?php

    // Berapa umur anda jika dihitung dari tanggal di atas
    
    $fullDate = '2020-05-01';
    $birthDay = '1992-10-10';
    $dateDiff = date_diff(date_create($birthDay), date_create($fullDate));

    $newDate = $dateDiff->format('%y');

    echo $newDate;

?>
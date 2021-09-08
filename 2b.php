<?php

    // Ubah format tanggal di atas menjadi 05-20-01 menggunakan format date php
    
    $fullDate = '2020-05-01';
    $newDate = date('m-y-d', strtotime($fullDate));

    echo $newDate;;

?>
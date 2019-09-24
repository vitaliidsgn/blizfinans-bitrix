<?php

function formatSizeUnits($bytes)
{
    if ($bytes >= 1073741824) {
        $bytes = round($bytes / 1073741824, 2) . ' gb';
    } elseif ($bytes >= 1048576) {
        $bytes = round($bytes / 1048576, 2) . ' mb';
    } elseif ($bytes >= 1024) {
        $bytes = round($bytes / 1024, 2) . ' kb';
    } elseif ($bytes > 1) {
        $bytes = $bytes . ' bytes';
    } elseif ($bytes == 1) {
        $bytes = $bytes . ' byte';
    } else {
        $bytes = '0 bytes';
    }

    return $bytes;
}

function clearPhone($phone)
{
    return preg_replace('/\D/', '', $phone);
}
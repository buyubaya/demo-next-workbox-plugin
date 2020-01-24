#!/usr/bin/env sh

set -x

web-push send-notification \
  --endpoint=https://fcm.googleapis.com/fcm/send/cEtkwpjI4RY:APA91bGoS0-5PmLslzKVAA0x3Im4v4W9dR7T6rb0iXSnKKs32p7nKsWWvecSi5n0k_bL342_F-WIym5sAewppIpQQY4s6gRS66yAsCV7jt6clbNdbOxg2I_ymIcVoCsCjfmSwTO5E-3E \
  --key=BP_mm_bPt2aROzZVCIBMSI95dCWRx8HNOAjUPLp2b_X2oALgt7jTX6NEaodp7wdku9-MquzZidVjMmciAc0KJ4k \
  --auth=cHYDJrwNiqFmR5kWm4oMTQ \
  --payload=TestFromCLI
  --vapid-subject=mailto:test@test.com \
  --vapid-pubkey=BL2Kr6XuPfOOABUf_6suEi4iMMQ92YQP2p9i-kI9Bb5M5WyvMFDBMfduGo2V90c0IvQ65li-_Q-ZPc7aJx-KNSw \
  --vapid-pvtkey=EsrTmMmeCvx3UL4D67Cj1_Yn6OuvW1rxo8yMRIjD-Qs \
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nadie',
  templateUrl: './nadie.page.html',
  styleUrls: ['./nadie.page.scss'],
})
export class NadiePage implements OnInit {
  videosUrl = [
    'https://youtube.com/watch?v=ORLUWmOkJ7w&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=brAtE8h120o&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=6_x5Q2mFTwA&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=UjReUtkSUiY&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=VrP_MoTriRU&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=m9Gct9e0IAA&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=b5GVPZE80DQ&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=CruuusxQ4TE&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=iEKr3NdpyNI&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=vcLNXDIZwZw&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=S3xpyFBDDaE&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=qjGhqOBC73E&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=0G8_CQy1nJU&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=a_qIig7Ja0A&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=boXe39hOjHo&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=6RT9EelE3kQ&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=l9f80venA4o&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=5P08wgnO7xk&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=NZIz75WRTPA&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=RgezKLdZ93E&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=TxtouM4Wnlg&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=cnKHSXQjNZU&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=Nuj1l9bhGoI&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=_0sHs0pJF7o&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=_lUfEu-1fbo&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=-mjHmgn6oHU&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=h6IG6MEE6pw&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=hHkOHebei40&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=rOsrzD7J62o&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=MihVBEaOiUI&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=LSFluSwH5MY&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=xVAH9H1H5iY&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=UA2KQZBlAuE&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=KMT1B9ijEpo&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=yNuLF-cCN_s&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=Ghj6TQhdy4Q&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=Bj0FPNLLC5k&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=yRdXDfJDoFI&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=AAE_FSrTfz0&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=jfyWzwZ1-ns&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=jwq3egvFOLU&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=kD24CMsTyek&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=AzkPI3DWEHw&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=5g8zEXXxHm0&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=mi2CFR-SP3o&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=tmiebalgbTA&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=6ZzVMYmYAS8&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=k5VwqeIBnBQ&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=rSKXjldn8jA&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=jdL1ghKSrJo&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=-Q7unF_i8Jw&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=InPaKfjMeOQ&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=l-WoRz8PvYA&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=-mTCKbZCEhI&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=vhBX6Q6H3Mw&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=WfjwXPVQxhk&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=QxONeqckTQE&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=otrkuVlUMcU&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=PTvXmptnJ4o&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=arLWOewS77g&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=PeG7kcWHx54&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=2l4P6h7Tn1w&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=GOd0DmN8f0Q&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=It2Ld9U0Xjk&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=b2yrJ81q0X8&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=v8r2MelQzMg&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=lJRBR7snODE&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=xyMQowPslBw&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=Dk953NwqBBA&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=e3d-71qgrFo&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=jXgqmDCWW9g&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=3g5FlxAZcK8&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=Hwrnqmd38bE&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=sCJLqXGeAzg&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=9itDJDQ_R7k&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=om6KN4p7_wM&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=mEmZFdRKLnE&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=TxkAD7uhLnA&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=uXyAOjS-0Jc&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=1jnE5i1SuK4&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=VzAYsyzPcjQ&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=yu9V37EGW-s&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=SKcDSTPG_oE&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=HQ0hX2x59kY&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=w2RlI3HCvpk&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=O1YC8w8WHl0&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=wLIXvuhrs5M&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=s5wrLUg1kDg&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=E0Umc-cmYig&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=Ayr54F1Rk-4&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=STXle04Obx8&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=2dD3LtaA3Mc&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=Xx1cbdfKN98&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=gLPfO4iKj1Q&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=6uxsIqWi2kE&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=qT5D-U0jZac&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=O8Zy4Um0S1c&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=hC6S4mW1TdE&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=KEsQyrPDuxc&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=1EyxZRALbGQ&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=ac9cIRwszNQ&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=aDwPeXHtLr4&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=8Cnz67PG1mE&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=QhadwxjdOGY&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=EfPti_KskME&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=fSHnKvTTVe0&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=PtQ6yZ32vI8&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=1pUaF8kdwTM&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=OI-5Bw-Tn6g&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=rrApxWXe1Gs&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=miN_hFHR8AM&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=G8UG42gBxg4&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=zbDM-cv00Xo&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=UAL1_IOgk_k&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=6pbw5_cqpVA&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=ipPpObaK65Y&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=aV8l7X7B3tU&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=lQRptFTPREY&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=cXZAeeBLOGI&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=Ssiyy3YUeYQ&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=mPcHVbu6HSs&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=wtfpltDwwCk&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=2_Uqxcn56vw&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=gv9c6zwz52o&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=rfcbPjqTCXM&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=N05OEHRuulU&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=GoZGQSeMjBU&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=r5IP_KFCPNA&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=DKJqZPz9eIY&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=Ksl7UZwPc8Q&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=ZWfXsHXg64g&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=pSmAEzkLuCI&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=wCGLvlXHgUU&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=9ocIBwDMxZU&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=HweTNLC7Ea4&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=QKHpQtZhVOk&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=rJ8IsgwBrBU&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=5H7IV2lXyx0&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=Q9p6SPjFsE0&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=6z_P3Zc93b0&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=Gcwhl7DHVOI&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=58OZ7laRHBY&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=PhKN-uJdwyk&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=BSJqRb0MO24&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=583l2xjTRdQ&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=65dxYnAoMZQ&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=KtRsoiCKW7o&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=GWefhmlTmXQ&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=65--RxaxZuY&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=pKwTrkk0O9o&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=KAbJHQCVQ8s&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=p6p2OigGO9Y&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=nOsEGWt4SfE&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=JnJBJeT0MwU&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=tFqE-j_C950&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=e7jn5cXFMA8&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=Q3cCY3TOzTc&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=BFEIM9kZ43c&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=8dV-g9smwcY&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=7ztf3xN1Wrg&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=KC-JDNbXa8I&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=s2V0jj1SAD8&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=m-bH0ULiI10&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=1ezEbh8pOXU&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=sbFSlTecxwY&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=k462vEL_xIo&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=jSVvdlDBFRA&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=muledjrsHzg&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=Qr8_eS9Yjyk&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=3IYSkYplGDQ&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=LA7FipUjvwM&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=Wkw_Y6Hk-64&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=ha-Sz27H_EI&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=IUN923gZM94&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=qsuIXFJDOsA&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=dq9y1o7ybQg&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=UeE1maYMcEU&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=ZBBXvo5MSbE&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=H--rzYZJIOQ&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=hzKd4fcmVlI&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=48cnypCDWAo&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=wjD591NDgTM&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=0s-oBMaVT9w&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=58cBOTiw4pc&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=77xwFYJsSEA&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=CeUQ80_cQMQ&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=at652m39oeg&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=-uh5XMbkLuY&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=DjEYsJ32yYM&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=ORJr9dSiFF8&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=Jj3SW4dMfvM&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=LVY_xRFkw0I&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=iGKD5GLtdG4&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=DfljIOphbVU&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=y_7DsN6I3kQ&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=LoMFHBT7EgQ&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=cP9estBfQwQ&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=zpLRgI7rW3Y&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=k3RWgsNd5MQ&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=Mx8G8kEYzw8&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=llYFY45wnU4&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=0MlROT0VNMc&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=coEy7XU25iY&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=G16BJI7v78c&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=BVhMwnuc2wc&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=F9ZKD6x9Qt0&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=GaDc3yReBTE&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=B0pCYT7a86s&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=ctiFiluBH5c&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=aK47keGlL0Q&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=da1mFtiJKOg&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=sD86N7JV4q8&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=-6J7WkLlWgA&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=7ZmZxAJu8Ns&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=cdJRVAIvtiU&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=awnHTfrl-y8&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=bQ3ZHsp1hNQ&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=sRh04Ip2oZo&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=_bnnxn6ZqH8&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=5BbB63Mq_WQ&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=bXDF9t-flS8&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=4piNdnmCujQ&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=h40Y21WkWiA&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=Yt0Joa9TIEE&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=q0vpQXQwuLw&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=lCZJ-62h75w&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=ezdW5lEFR30&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=bUMcwDr6hI0&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=Whk3WkH0q3w&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=3_Ht_yd4MOQ&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=c1mTV62pWt8&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=aKdAR3XRWYc&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=pwD3xF93SZQ&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=fcIP2jmYYeg&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=7jq2eMZ5ymQ&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=QhK6LgwLNJg&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=ZivIQREUzxE&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=J-uAHYNFMZ4&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=WdRwGMBQCSQ&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=vSIy0tyuqi8&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=g6w-ImmSAz8&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=mPh4Aj_JBoo&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=7xTe5g07FTc&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=oItTFwA3Zd4&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=iTgnS-nTExc&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=arjdhZEE3t4&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=1HoJzyT8iQg&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=7DBYDemV0ek&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=m6jNujtA8FY&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=V_3ipvDDqH8&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=VBr9O5IUM1s&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=5myZUuxkDKY&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=F287ElMqOAU&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=aQaLsDayyB0&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=zzNopzr87O4&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=B88yVSgvc4U&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=y5VD-JFc_aU&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=w1cvITk-itk&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=qy5FcQmusng&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=CcYoefZ0AFw&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=PieOOX_3neM&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=gIOc0QAfufM&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=iyvta_ZP03c&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=mL69pG3Dfpw&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=mk5-wrPnAFA&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=pzJMkmdYRlQ&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=SugR5oCZX5k&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=Cr_qJm-yFmA&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=na4nPNrzbyg&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=HgSf3Tg-iYc&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=g0clLE7ZfVQ&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=ZHbxx04znWc&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=N1l66xxWIfE&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=NqDuxwwxNkA&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=pqDhAjaR-1Y&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=IXnSLJRUqnU&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=SGdMCJRxdmM&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=ylPSNTccUIs&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=LHsXDI_k49I&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=RAa9_XtvwxQ&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=8Kf_fNL4V-A&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=2UoyPQLkWS8&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=n4yM_gKZWa8&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=4Jx4p1A6RU0&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=GQnDU5FndFc&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=WztHj8x1L1E&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=lkVptqdlL6E&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=O4NtJxLB700&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=h8fJ8o6ecvo&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=kwXGTp5bRD4&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=L_1bACKyvx4&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=_e9wzoogiOI&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=t8mRR4rlfUA&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=ZQiMHVZx3P4&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=ms2Ice5V4EM&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=b4eWnp3r_NI&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=V_OytvwpmTI&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=qJyD9kTiQlk&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=AiqOsdWWul4&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=aLYB4xvUhcQ&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=93pEE4c0Sps&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=yw6KAWW5Q-g&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=iLGsB7MIWr0&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=G7xZ5cR5JDY&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=f6ZdHnPZWBI&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=wIbOfslQTO0&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=l44kf2w25To&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=tBViQtG7M2g&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=QVQyC2cGBH0&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=VApPJqTCIns&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=Hm1mWSgFpJA&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=WFRzTNMdujU&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=uJnKv20jR8w&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=MdN63ax-bTE&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=GnTPvdlZKys&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=IPkd2u4NOYs&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=SZTnScpeUbo&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=F7x9---Cqe0&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=J_gN0T7a9W4&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=reWZvNzQUe0&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=rTheJD97Viw&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=0Ahl0tB4n8Q&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=YvyMvYoFxfg&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=_fU4SP2VSU0&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=Uw5Ey9Fi_P0&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=8-HOAjZVjrg&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=YHRLvOPGlj8&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=dmnFxP3QdL0&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=TAyGAspN7SM&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=ZMyszLC65TQ&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=kLxqNWQaYHc&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=JyT59sZehXo&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=0fErLoqmgKI&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=fDjntd0RUlw&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=WdFmqZl5eNc&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=xham_1bdzXA&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=otK4LNj-x_o&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=wemIxLGnmdY&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=rJdiyHCv7k8&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=VjgHOZHGycI&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=LPcOnvM5R-4&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=HQ90TiUUhqw&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=XojUGy449Fs&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=p-6ocA7Yh-8&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=vnWrvn4HrQw&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=WfzQ9vThP6E&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=_HUdXSqYF3I&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=6TcFQbhHqAw&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=dDnGXW530Q4&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=Z0IwcF19xX4&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=PqR3ceMeCwc&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=X9LndWJeSSo&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=LNAHiQR3hvE&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=kYd8CWSztCs&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=xn2oro6F-Ho&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=I0knbls9aTs&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=dWyRzoy75GA&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=B5T37UDuGYU&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=cAr9J2yAEu4&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=KJuwzUaZTdo&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=pTO40-FgtTY&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=feVexJIXNM4&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=INrA5zLYiB0&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=iom5YSPEziE&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=XmVs5D_-sHE&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=JaoUVo8PS5A&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=va3aOruNnD0&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=eNh_Ep8WC8E&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=IfIlMKQEYB8&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=0CnVm8o_KkU&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=z21h5MBdJvw&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=S_uBPksCJRM&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=GjjbqJqEZC8&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=sZQX4KFpCJc&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=8eilOCfGW3Q&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=x0KsET_iZuo&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=suwtkeMCP2o&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=VieAzTJxif4&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=itzPHNplb68&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=yoOBWW3PrRE&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=Sp6dDBUkrB4&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=VMlM8yyRmPs&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=qMeGHSEwLvQ&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=XysHbvIAm20&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=OzKyTqYP8nk&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=usjGVQrkdeA&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=6E7Pel34L7k&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=MW6ZWPwb8gU&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=1OfqkwzuxTA&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=OfCWdpxFT9g&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=eN97nMb0kZ4&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=st-yQA1zA6Q&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=bPMrs6p2BcA&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=BjhpOEfIdLo&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=KVXHukHEPBY&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=zb4n3ZEXGU8&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=ZKSSjYgb96U&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=IKfWHzrvbQg&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=rbIGTAJ71A0&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=AqM0GYMxqGU&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=a6MkXesIjs4&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=p7qJVKq4ygk&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=VpiaGsxWw88&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=JSV-QzhiUOk&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=jRQXCYGaQ84&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=CMjpbKu59CE&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=d-JNZ3zJCDs&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=qfJPiRNnzhs&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=Ao7NwY-Cp6c&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=VVmnoSgkPqk&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=GIHgytz4jko&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=ZucK_Wm5YKs&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=0VKPXiarfeo&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=z7LmNxIkoTg&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
    'https://youtube.com/watch?v=vgRebU1It7Q&list=PLdLacESORkt0t5eWPEtgCevDloY9l8Fvp',
  ];

  constructor() {}

  ngOnInit() {
    const urlToRedirect =
      this.videosUrl[this.randomNumber(this.videosUrl.length - 1)];
    location.href = urlToRedirect;
  }

  randomNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }
}

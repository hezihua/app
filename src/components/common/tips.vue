

<template>
    <Teleport to="body">
        <div v-if="isVisible" class="mask">
            <div class="container" @wheel="handleWheel">
                <div class="header">
                    Disclaimer
                </div>
                <div class="content">
                    <!-- 免责声明内容 -->
                    This website contains information about Infini Capital Management Limited ("Infini HK") and the products and/or funds offered by Infini HK. The information contained within this website is only intended to be accessed by investors qualified to invest in private pooled investment vehicles under the applicable regulatory requirements. Such persons include investor(s) who qualify as a “qualified investor” or similar as defined in the applicable jurisdiction and who is allowed to invest in private pooled investment vehicles offered by Infini HK under the relevant laws and regulations of the applicable jurisdiction. Specifically, if you are resident in Hong Kong, you are required to confirm that you are a “Professional Investor” as defined under Cap 571 of the Securities & Futures Ordinance of the laws of Hong Kong. 
                    Infini HK is not utilising this website to provide investment advice or strategies, and nothing on this website is to be deemed a recommendation that you buy, sell or hold any security or other investment, or that you pursue any investment style or strategy. The investment and strategies discussed hereon may not be suitable for all investors and are not obligations of or guaranteed by Infini HK.
                    The information provided on this website should not be considered an offer or solicitation to deal in any of the investments mentioned herein, by anyone in any jurisdiction in which such offer or solicitation would be unlawful or in which the person making such offer or solicitation is not qualified to do so or to anyone to whom it is unlawful to make such offer or solicitation. Those who access this website do so on their own initiative and are therefore responsible for observing all applicable laws and regulations of their relevant jurisdictions before proceeding to access the information contained herein. 
                    The private pooled investment vehicles referred to on this website are exempt from registration in applicable jurisdictions, specifically pursuant to the exemptions outlined under the U.S. Investment Company Act of 1940. Furthermore, shares in the funds are only intended for and available to certain professional investors pursuant to Hong Kong Securities and Futures Ordinance and subsidiary legislation, and similar laws in other jurisdictions, as applicable.
                    The information provided on the Infini HK website is not intended for distribution to, or use by, any person or entity in any jurisdiction or country that would subject Infini HK or its affiliates to any registration requirement within such jurisdiction or country.
                    While Infini HK takes reasonable care to ensure that the information on this website is accurate and up to date at the time of publishing, the information on this website is provided on an "as is" and “as available” basis without any representation or warranty of any kind, express or implied, or an guaranty or assurance this website will be available for use or that all information, content, materials, products, features, functions or operations will be available or perform as described. Infini HK does not warrant that any part of the website will operate uninterrupted or error-free or that defects will be corrected. Infini HK does not warrant that the website, information, content, materials, products, or other services included on or otherwise made available to you through the website or electronic communications sent from the website are free of viruses, malicious code or other harmful components. You expressly agree that your use of this website or reliance upon any of the materials on the website is at your sole risk.  
                    Infini HK shall not be liable for any losses or damages relating to adequacy, accuracy or completeness of any information on this website or the use of such information. All information contained herein may be changed or amended without prior notice. Also, Infini HK is not responsible for any errors or omissions relating to information provided by any third party. Infini HK is not responsible for any damaged or injury, including but not limited to direct, indirect, incidental, special, punitive and consequential damages, that result from your use of (or inability to use) this website, or from any information, content, materials, products or other services included on or otherwise made available to you through the website, including any damages or injury caused by any failure of performance, error, omission, interruption, defect, delay in operation, computer virus, line failure, or other computer malfunction.
                    Investment involves risks. The funds do not give any guarantees. Past performance is not a reliable indicator of future performance. Infini HK does not guarantee the performance of any Infini HK fund(s), the return of an investor’s capital nor any specific rate of return. Value of investments can go down as well as up. Prior to investing, please refer to the offering documents together with the current financial statements of the relevant fund, if available, and the relevant subscription application, all of which must be read in their entirely for details including risk factors. You should ensure you fully understand the risks associated with the investment and should also consider your own investment objective and risk tolerance.
                    The information on this website is being provided strictly for informational purposes only and nothing on this website constitutes a distribution, solicitation, invitation, recommendation, offer or investment advice to purchase a product offered by Infini HK or any Infini HK funds or be used as a basis for making any investment or commercial decision. This website does not have any regard to the investment objectives, financial situation and particular needs of any specific person. You should at all times seek advice from an independent financial adviser and obtain independent verification of the information or data contained herein before making any decision based on such information or data. 
                    To the maximum extent permitted by law, you agree to indemnify, defend and hold harmless Infini HK, its members, licensors, officers, directors, employees, agents, trustees, subsidiaries, parent companies and affiliates (the “Indemnitees”) from and against all third party complaints, charges, claims, losses, expenses, damages, costs, liabilities and expenses (including, but not limited to, reasonable attorneys’ fees) due to, arising out of, or relating in any way to: (a) your access to or use of this website and (b) your breach of this Agreement, in each case unless caused by such Indemnitee’s misrepresentation, gross negligence, wilful misconduct or fraud. 
                    The products and/or funds mentioned in this website have not been registered or qualified with, nor approved or disapproved by any regulatory authority, nor has any regulatory authority vetted upon the accuracy or adequacy of the information provided herein.
                </div>
                <div class="footer">
                    <div class="button" @click="handleAgree">
                        I have read and agreed
                    </div>
                    <!-- <div class="button" @click="handleDisagree">
                        I do not agree
                    </div> -->
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

// 定义props
const props = defineProps({
  isVisible: Boolean
});

// 定义自定义事件
const emit = defineEmits(['agree', 'disagree']);

// 处理用户同意
const handleAgree = () => {
  emit('agree');
};

// 处理用户不同意
const handleDisagree = () => {
  emit('disagree');
};

const handleWheel = (event) => {
  event.stopPropagation(); // 阻止滚动事件冒泡
};
</script>


<style lang="scss" scoped>
    .mask {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.5);
        z-index: 99;
        .container {
            width: 60%;
            background-color: #fff;
            overflow-y: scroll;
            height: 60vh;
            
            .header {
                height: 50rem;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 30rem;
                background: #093254;
                font-family: var(--main-font);
            }
            .content {
                font-size: 13rem;
                color: #093254;
                padding: 30rem 60rem;
                text-align: justify;
                margin: 20rem 0 0;
            }
            .footer {
                height: 50rem;
                display: flex;
                justify-content: center;
                .button {
                    width: 200rem;
                    height: 40rem;
                    background: #093254;
                    color: #fff;
                    font-size: 15rem;
                    margin: 0 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                }
            }
        }
    }
</style>
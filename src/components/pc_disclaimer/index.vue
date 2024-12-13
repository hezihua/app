<template>
    <div class="container">
        <Header />
         <div class="title">
            Disclaimer
         </div>
         <div class="content">
            <div class="item">
                This website contains information about Infini Capital Management Limited ("Infini HK") and the products and/or funds offered by Infini HK. The information contained within this website is only intended to be accessed by investors qualified to invest in private pooled investment vehicles under the applicable regulatory requirements. Such persons include investor(s) who qualify as a “qualified investor” or similar as defined in the applicable jurisdiction and who is allowed to invest in private pooled investment vehicles offered by Infini HK under the relevant laws and regulations of the applicable jurisdiction. Specifically, if you are resident in Hong Kong, you are required to confirm that you are a “Professional Investor” as defined under Cap 571 of the Securities & Futures Ordinance of the laws of Hong Kong. 
            </div>
            <div class="item">

                Infini HK is not utilising this website to provide investment advice or strategies, and nothing on this website is to be deemed a recommendation that you buy, sell or hold any security or other investment, or that you pursue any investment style or strategy. The investment and strategies discussed hereon may not be suitable for all investors and are not obligations of or guaranteed by Infini HK. 
            </div>
            
            <div class="item">

                The information provided on this website should not be considered an offer or solicitation to deal in any of the investments mentioned herein, by anyone in any jurisdiction in which such offer or solicitation would be unlawful or in which the person making such offer or solicitation is not qualified to do so or to anyone to whom it is unlawful to make such offer or solicitation. Those who access this website do so on their own initiative and are therefore responsible for observing all applicable laws and regulations of their relevant jurisdictions before proceeding to access the information contained herein.
            </div>
            <div class="item">

                The private pooled investment vehicles referred to on this website are exempt from registration in applicable jurisdictions, specifically pursuant to the exemptions outlined under the U.S. Investment Company Act of 1940. Furthermore, shares in the funds are only intended for and available to certain professional investors pursuant to Hong Kong Securities and Futures Ordinance and subsidiary legislation, and similar laws in other jurisdictions, as applicable.
            </div>
            <div class="item">

                The information provided on the Infini HK website is not intended for distribution to, or use by, any person or entity in any jurisdiction or country that would subject Infini HK or its affiliates to any registration requirement within such jurisdiction or country.
            </div>
            <div class="item">

                While Infini HK takes reasonable care to ensure that the information on this website is accurate and up to date at the time of publishing, the information on this website is provided on an "as is" and “as available” basis without any representation or warranty of any kind, express or implied, or an guaranty or assurance this website will be available for use or that all information, content, materials, products, features, functions or operations will be available or perform as described. Infini HK does not warrant that any part of the website will operate uninterrupted or error-free or that defects will be corrected. Infini HK does not warrant that the website, information, content, materials, products, or other services included on or otherwise made available to you through the website or electronic communications sent from the website are free of viruses, malicious code or other harmful components. You expressly agree that your use of this website or reliance upon any of the materials on the website is at your sole risk. 
            </div>
            <div class="item">

                Infini HK shall not be liable for any losses or damages relating to adequacy, accuracy or completeness of any information on this website or the use of such information. All information contained herein may be changed or amended without prior notice. Also, Infini HK is not responsible for any errors or omissions relating to information provided by any third party. Infini HK is not responsible for any damaged or injury, including but not limited to direct, indirect, incidental, special, punitive and consequential damages, that result from your use of (or inability to use) this website, or from any information, content, materials, products or other services included on or otherwise made available to you through the website, including any damages or injury caused by any failure of performance, error, omission, interruption, defect, delay in operation, computer virus, line failure, or other computer malfunction.
            </div>
            <div class="item">

                Investment involves risks. The funds do not give any guarantees. Past performance is not a reliable indicator of future performance. Infini HK does not guarantee the performance of any Infini HK fund(s), the return of an investor’s capital nor any specific rate of return. Value of investments can go down as well as up. Prior to investing, please refer to the offering documents together with the current financial statements of the relevant fund, if available, and the relevant subscription application, all of which must be read in their entirely for details including risk factors. You should ensure you fully understand the risks associated with the investment and should also consider your own investment objective and risk tolerance.
            </div>
            <div class="item">

                The information on this website is being provided strictly for informational purposes only and nothing on this website constitutes a distribution, solicitation, invitation, recommendation, offer or investment advice to purchase a product offered by Infini HK or any Infini HK funds or be used as a basis for making any investment or commercial decision. This website does not have any regard to the investment objectives, financial situation and particular needs of any specific person. You should at all times seek advice from an independent financial adviser and obtain independent verification of the information or data contained herein before making any decision based on such information or data. 
            </div>
            <div class="item">

                To the maximum extent permitted by law, you agree to indemnify, defend and hold harmless Infini HK, its members, licensors, officers, directors, employees, agents, trustees, subsidiaries, parent companies and affiliates (the “Indemnitees”) from and against all third party complaints, charges, claims, losses, expenses, damages, costs, liabilities and expenses (including, but not limited to, reasonable attorneys’ fees) due to, arising out of, or relating in any way to: (a) your access to or use of this website and (b) your breach of this Agreement, in each case unless caused by such Indemnitee’s misrepresentation, gross negligence, wilful misconduct or fraud. 
            </div>
             
             <div class="item">

                The products and/or funds mentioned in this website have not been registered or qualified with, nor approved or disapproved by any regulatory authority, nor has any regulatory authority vetted upon the accuracy or adequacy of the information provided herein.
            </div>
             
            



         </div>
         <Footer/>
    </div>
</template>

<script setup>
import Header from '../common/header.vue'
import Footer from '../common/footer.vue'
</script>

<style lang="scss" scoped>
.container {
    background: #093254;
    padding: 200rem 0 0;
    height: 100%;
    font-size: 26rem;
    .title {
        font-size: 58rem;
        margin-bottom: 20rem;
        padding: 0 10vw 0;
    }
    .content {
        padding: 0 10vw 80rem;
        .item {
            margin-bottom: 30rem;
            // text-indent: 2em;
        }
    }
}
</style>
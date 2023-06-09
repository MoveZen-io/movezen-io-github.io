
function prependHtmlBody(bodyVar) {
  // Prepare your HTML content
  var htmlContent = bodyVar;

  // Prepend the HTML into the body
  Office.context.mailbox.item.body.prependAsync(htmlContent, { coercionType: Office.CoercionType.Html }, function(result) {
      if (result.status === Office.AsyncResultStatus.Succeeded) {
          console.log('HTML body prepend successfully');
      } else {
          console.error(`Failed to prepend HTML body. Error: ${result.error.message}`);
      }
  });
}





function sendSorry() {
  Office.context.mailbox.item.subject.setAsync("Thanks for contacting us");
  // Office.context.mailbox.item.body.setAsync("This is the body of the email.");
  prependHtmlBody(`<p>Hi!</p><br>

<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Thank you for your interest in this property.&nbsp; Unfortunately, we've' accepted an application on the property and should be collecting the deposit within a day or so.&nbsp; I&#39;ll certainly keep your contact information nearby in the event that something comes up with our current applicant.&nbsp; Thanks again, and sorry for the inconvenience. Please follow us on your favorite social media platform and be the first to hear about new listings as they come available. Thanks! Customer Service Team</p><br>

<p><a href="https://www.facebook.com/VictoryPropertyManagement" target="_blank">Follow us on Facebook to Receive Automatic Updates on Price Reductions and New Listings</a></p><br>

<p><a href="https://twitter.com/victoryrealty" target="_blank">Follow us on Twitter to Receive Automatic Updates on Price Reductions and New Listings</a></p>`);

}



function sendApp() {
  Office.context.mailbox.item.subject.setAsync("How to get your MoveZen application moving forward fast!");
  // Office.context.mailbox.item.body.setAsync("This is the body of the email.");
  prependHtmlBody(` <p>Thank you for beginning the application process!<br />
  <br />
  Our application process is broken down to two main parts. Payment, and background information submission. &nbsp;You will need to get us both of those before we can move forward. Here&#39;s how..<br />
  <br />
  If you haven&#39;t submitted your application payment yet, you can do so with the link below:<br />
  <a href="https://movezen.sharepoint.com/:b:/s/acctmanagers/EZgzJDZR3LhMkdV820qNJs4BohN5zw1amoXeB2OuWVlikA?e=yL0V7q">Just to pay the $79 application&nbsp;fee.</a>&nbsp; This is the last step if you&nbsp;haven&#39;t paid, but have submitted your personal information</p>
  
  <p>&nbsp;</p>
  
  <p>If you have paid, but haven&#39;t submitted your legal information for our background check,&nbsp;<a href="https://victoryre.appfolio.com/listings/">you can do that here</a><br />
  &nbsp;<br />
  We&#39;re excited to get started with finalizing! &nbsp;Please, it&#39;s very important that you review this&nbsp;introductory information to make sure we hit the ground running with aligned expectations.<br />
  <br />
  We&#39;ll often email or text important questions and info which is often sent to spam or promotion folders, so whitelist us or regularly check those folders<br />
  <br />
  Below you&#39;ll find a sample lease &amp; the rules of the road which you have hopefully already reviewed, if not you must do so as they will be included with your lease. &nbsp;<br />
  <br />
  You&#39;ll also find crucial information on how to address pre-move in repairs and if you hope to get a pet during your time in the home. &nbsp;<br />
  <br />
  <a href="https://movezen.sharepoint.com/:b:/s/acctmanagers/EZgzJDZR3LhMkdV820qNJs4BohN5zw1amoXeB2OuWVlikA?e=cPpkVQ">Victory Rules &amp; Regulations Link</a><br />
  <br />
  <a href="https://movezen.sharepoint.com/:b:/s/acctmanagers/EUGHc7hjjnlMvpxiqDjwhK4BMbfvsSwl5YqoA7JIHH0xAQ?e=8ELHHz">Sample NC lease</a></p>`);

}



function sendVendor() {
  Office.context.mailbox.item.subject.setAsync("Thanks for your interest in working with us!");
  // Office.context.mailbox.item.body.setAsync("This is the body of the email.");
  prependHtmlBody(`<p>​Hello!<br />
  <br />
  Thanks for your interest in becoming a vendor with Victory Property Management. Attached, you&#39;ll find an information packet and some forms for your reference. In order to complete your vendor onboardings, we will need the following:<br />
  &nbsp;</p>
  
  <ul>
    <li><a href="https://movezen.sharepoint.com/:b:/s/Teams/EfwwnpuUK9FIjAvfRLb6kcwBz8TEiRRt7bNnXbOTFVQJ9w?e=bZxTYG">Learn who we are</a></li>
    <li>Provide your business/individual name</li>
    <li><a href="https://www.irs.gov/pub/irs-pdf/fw9.pdf">Submit a signed W9 form</a></li>
    <li>Provide a certificate of insurance listing Victory Real Estate Inc as an additional insured/interest at the following address: 4002 1/2 Oleander Dr. Suite 1A, Wilmington, NC 28403</li>
    <li>Share your mailing address and contact information</li>
    <li>Describe your field of work and the service area you cover</li>
  </ul>
  
  <p><br />
  Please let us know if you have any questions. We look forward to working with you!<br />
  <br />
  Thanks, Customer Service Team</p>
  `);

}




function sendRentalResponse() {
  Office.context.mailbox.item.subject.setAsync("Thanks for your interest in this MoveZen home!");
  // Office.context.mailbox.item.body.setAsync("This is the body of the email.");
  prependHtmlBody(`<p>Thank&nbsp;you&nbsp;so much for contacting us! We appreciate&nbsp;your&nbsp;interest and will do whatever we can to find&nbsp;you&nbsp;the perfect home.&nbsp;</p>

  <p>&nbsp;</p>
  
  <p>If&nbsp;you&nbsp;would like to go ahead and easily schedule a viewing,&nbsp;you&nbsp;can bypass this email altogether, and use the link below.&nbsp; Many of our properties are available for instant access at any time that&nbsp;you&nbsp;choose between 8am and 8pm.</p>
  
  <p>&nbsp;</p>
  
  <p><a href="https://victoryrealestateinc.com/schedule-a-self-showing/" target="_blank">Link to Access Self Showings</a></p>
  
  <p>&nbsp;</p>
  
  <p>The home&nbsp;you&nbsp;inquired about is a really great deal, and I&rsquo;m sure&nbsp;you&nbsp;will love it once&nbsp;you&nbsp;have a chance to take a closer look! To&nbsp;make&nbsp;the process a little quicker, the following information would be helpful&hellip;</p>
  
  <p>&nbsp;</p>
  
  <p>When are&nbsp;you&nbsp;looking&nbsp;to&nbsp;make&nbsp;your&nbsp;big&nbsp;move&nbsp;and&nbsp;become&nbsp;a&nbsp;Victory&nbsp;resident?&nbsp;</p>
  
  <p>&nbsp;</p>
  
  <p>Would&nbsp;you&nbsp;have a problem with a credit check, if&nbsp;you&nbsp;decide&nbsp;you&nbsp;want to rent?</p>
  
  <p>&nbsp;</p>
  
  <p>Please describe any pets&nbsp;you&nbsp;have that will be in the home.</p>
  
  <p>&nbsp;</p>
  
  <p>Who will the tenants be, and what is their job/cosign situations?</p>
  
  <p>&nbsp;</p>
  
  <p>What kind of term are&nbsp;you&nbsp;looking&nbsp;for?&nbsp; Would&nbsp;you&nbsp;consider a 2-year lease?</p>
  
  <p>&nbsp;</p>
  
  <p>Do&nbsp;you&nbsp;have a past landlord reference?</p>
  
  <p>&nbsp;</p>
  
  <p>&nbsp;&nbsp;&nbsp; &nbsp;At MoveZen we take very good care of our customers. Should&nbsp;you&nbsp;choose one of our premium homes,&nbsp;you&nbsp;will enjoy the following conveniences: the fastest response in the industry to maintenance issues; courteous, professional, office staff; timely processing of applications and repairs.&nbsp;MoveZen operates with the highest level of honor and integrity. Whether in the best interest of our tenants, or homeowners,&nbsp;you&nbsp;can always count on us to act in perfect accordance with the law, and just good neighborhood service.&nbsp;</p>
  
  <p>Thanks!&nbsp; Customer Service Team</p>`);

}




function sendPayslip() {
  Office.context.mailbox.item.subject.setAsync("Hello World!");
  // Office.context.mailbox.item.body.setAsync("This is the body of the email.");
  prependHtmlBody(`<p>Still Paying Rent With a Check or Money Order?</p><br>

  <p>We have a much better solution using a payment process through your nearby WalMart or CVS!&nbsp; Among others</p>

  <p>&nbsp;</p>
  
  <p>All you do is walk in with a barcode that we would provide to you by text or email, they scan it, you pay, and your rent is instantly&nbsp;funded and will&nbsp;show up on our end that way. It&#39;s the best way to avoid late fees</p>
  
  <p>&nbsp;</p>
  
  <p>More importantly, it&#39;s a lot cheaper than buying multiple money orders</p>
  
  <p>&nbsp;</p>
  
  <p>Finally it&#39;s low risk. With WalMart you know it&#39;s legitimate and safe. Just keep your receipt, and it&#39;s safer&nbsp;than a money order also</p>
  
  <p>&nbsp;</p>
  
  <p>Contact us today and we&#39;ll send yours out!&nbsp; Customer Service Team</p>
  `);

}



function sendOwnerMove() {
  Office.context.mailbox.item.subject.setAsync("We wanted to let you know that our resident is moving out");
  // Office.context.mailbox.item.body.setAsync("This is the body of the email.");
  prependHtmlBody(`
 <table align="center" cellspacing="0" style="border-collapse:collapse; max-width:600px; width:100%">
	<tbody>
		<tr>
			<td style="border-bottom:0px; border-top:0px; vertical-align:top">
			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; max-width:100%; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top">
									<h4 style="text-align:center"><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="font-size:20px"><span style="color:#949494"><span style="font-family:Georgia"><em><span style="color:#696969"><span style="font-size:14px"><span style="font-family:tahoma,verdana,segoe,sans-serif">Unfortunately, your renter has given us notice that they intend to end their lease as soon as possible, which is usually about 60 days from now.&nbsp; We need to consider a couple critical issues to decide where we go from here.&nbsp; Delays right now tend to have a major effect on how quickly we get the home rented so be decisive and clear</span></span></span></em></span></span></span></span></span></span></h4>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td style="text-align:center; vertical-align:top"><img alt="" class="gmail_canned_response_image" src="https://ci6.googleusercontent.com/proxy/bllWmKk12ceyPNUSCu0_31xcLzo_irur8Nn3DxHCWPOk9ZsdmdYUoqKSS_BX-3RvXyRIbqI4IhGGnbZ-sZa0TKLiVWFIOWIoshnW0ZTFG7XMosnyDRdqqRGgJwfIxQzWMaTA0SEdpykliq_zL_wo2onaWA7dkoMPiAo=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/a6cc3d63-36a9-45ee-a279-6323028af4b4.jpg" style="border:0px; display:inline; height:auto; max-width:1280px; outline:none; padding-bottom:0px; vertical-align:bottom; width:564px" /></td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; table-layout:fixed; width:100%">
				<tbody>
					<tr>
						<td>
						<table cellspacing="0" style="border-collapse:collapse; border-top:2px solid #eaeaea; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td>&nbsp;</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td>
									<table cellspacing="0" style="background-color:#dc7d44; border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="background-color:#dc7d44; text-align:center; vertical-align:top"><span style="font-size:14px"><span style="color:#f2f2f2"><span style="font-family:Helvetica"><strong>The most important thing to consider</strong> is whether you want to relist the home for rent and continue as usual, or if you want to make some other arrangement such as listing it for sale, or moving back in<br />
												<br />
												<strong>Why is this important?</strong>&nbsp; Well for one, if we are rerenting we like to list right away to ensure the best possible outcome, so a delay starts to chip away at our marketing options.<br />
												<br />
												<strong>Why else?</strong>&nbsp; One major matter we need to consider is how tenant paid repairs will be handled.&nbsp; If we&#39;re relisting for rent the process is simple and will be in line with how we have handled them in the past.&nbsp; Basically we&#39;ll handle it and you have nothing to worry about.&nbsp; If however you are doing something different with the property, it usually makes more sense for us to simply charge the deposit, and send you those funds so you can handle the repairs yourself.<br />
												<br />
												<strong>Why?&nbsp;</strong> The answer is simple, when we do repairs we try our hardest to keep costs as low as possible without hurting our chances of rerental.&nbsp; Also due to security deposit laws we are restricted to mostly targeted fixes rather than general improvement. So rental repairs or updates are vastly different from sales or owner occupied updates.&nbsp; A prime example would be paint.&nbsp; We typically focus on specific walls, touch up, and where we can get the most bang for the buck.&nbsp; This almost always excludes doors and trim.&nbsp; After 5 years on the rental market we may be able to squeak by without painting trim, but if you attempt that approach on the sales market you&#39;ll regret it.&nbsp; A sales quality paint job will likely run 3X what we would have charged.&nbsp; We discuss this issue in depth <a href="https://VictoryRealEstateInc.us2.list-manage.com/track/click?u=550bd6ef99c9bde377800aeef&amp;id=67e3ee93f2&amp;e=ccbdb3fd00" style="color:#007c89" target="_blank">here...</a></span></span></span></td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; table-layout:fixed; width:100%">
				<tbody>
					<tr>
						<td>
						<table cellspacing="0" style="border-collapse:collapse; border-top:2px solid #eaeaea; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td>&nbsp;</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td>
									<table cellspacing="0" style="background-color:#1d8387; border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="background-color:#1d8387; text-align:center; vertical-align:top">
												<p><span style="font-size:14px"><span style="color:#f2f2f2"><span style="font-family:Helvetica"><strong><img class="gmail_canned_response_image" src="https://ci6.googleusercontent.com/proxy/ldJaFjXeNMt_JHRkudvMQnMzUTHw2hyldk3ulfWZdA8cNmFeKOE-L4t_slw0knJoT-K68vIXIySiIgaNjHo4xAHb7FbhPcfdMN2sWqs6qVRdWn5JqQJOZ_YenZOdOqQ3P4qHtfj9V338ko9BRRWRt3DqK0gEA0GwrBc=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/76a56d71-e60a-4fe5-9630-fa08cc99d3d4.jpg" style="border:0px; float:right; height:166px; margin-left:10px; margin-right:10px; outline:none; width:250px" />So what steps should you take from here?&nbsp; If you are not planning to rerent you want to notify us immediately, and include how you&#39;d like us to handle tenant charges / repairs.&nbsp; You also want to make sure that the utilities are transferred to your name on time so that we can do a proper inspection.<br />
												<br />
												<br />
												Planning to rerent?&nbsp; Follow these critical steps asap!</strong></span></span></span></p>
												</td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table cellspacing="0" style="border-collapse:collapse; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top">
									<table align="left" cellspacing="0" style="border-collapse:collapse; width:264px">
										<tbody>
											<tr>
												<td style="vertical-align:top"><img alt="" class="gmail_canned_response_image" src="https://ci6.googleusercontent.com/proxy/PfYUBTKmTzL4jG_W7JUJhSxFzsT1tHMIBJLL9iaI9A-yKQC2pkk4EARWla8GcJgOVEtPz8rLzYdaCkkBujTaqJOyWiCh-wXYlTNpAtNv8TZZde6Y8juNFv40vq2Tl6GXwrEiHvGsBPuyxhZpW6AnpIxJsovqnQb0bg4=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/0f02dff7-4654-4f54-9b15-a4dc1d329224.jpg" style="border:0px; height:auto; max-width:30px; outline:none; vertical-align:bottom; width:30px" /></td>
											</tr>
										</tbody>
									</table>

									<table align="right" cellspacing="0" style="border-collapse:collapse; width:264px">
										<tbody>
											<tr>
												<td style="vertical-align:top"><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="color:#000000"><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">Make sure power &amp; water are set up to revert to your name rather than being shut off.&nbsp; This is important</span></span></span></span></span></span></td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; max-width:100%; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top"><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="color:#000000"><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">for several reasons.&nbsp; 1.&nbsp; We cannot properly inspect a home without utilities, and should things be missed as a result, we can&#39;t be held responsible.&nbsp; 2.&nbsp; We cannot properly market a home without utilities obviously.&nbsp; 3.&nbsp; Especially in winter, not having the power on is likely to result in busted pipes / floods</span></span></span></span></span></span></td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table cellspacing="0" style="border-collapse:collapse; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top">
									<table align="left" cellspacing="0" style="border-collapse:collapse; width:264px">
										<tbody>
											<tr>
												<td style="vertical-align:top"><img alt="" class="gmail_canned_response_image" src="https://ci6.googleusercontent.com/proxy/PfYUBTKmTzL4jG_W7JUJhSxFzsT1tHMIBJLL9iaI9A-yKQC2pkk4EARWla8GcJgOVEtPz8rLzYdaCkkBujTaqJOyWiCh-wXYlTNpAtNv8TZZde6Y8juNFv40vq2Tl6GXwrEiHvGsBPuyxhZpW6AnpIxJsovqnQb0bg4=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/0f02dff7-4654-4f54-9b15-a4dc1d329224.jpg" style="border:0px; height:auto; max-width:30px; outline:none; vertical-align:bottom; width:30px" /></td>
											</tr>
										</tbody>
									</table>

									<table align="right" cellspacing="0" style="border-collapse:collapse; width:264px">
										<tbody>
											<tr>
												<td style="vertical-align:top"><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="color:#000000"><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">Prepare for a break in monthly income / payments.&nbsp; It can be tough to rerent a property that&#39;s tenant occupied, and therefore you&#39;ll want to prepare for the potential of not receiving any rent</span></span></span></span></span></span></td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; max-width:100%; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top"><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="color:#000000"><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">for a couple of months.&nbsp; Also there are almost always a few minor costs that NC requires landlords to shoulder and this will result in reduced income as well.&nbsp; If the tenant leaves the unit relatively clean we&#39;ll still have to come in and spruce it up.&nbsp; While we try to require tenants to have carpets professionally cleaned it&#39;s actually not something we can legally enforce.&nbsp; If the tenant has been in the property for more than a year we&#39;ll also likely have to do some touch-up painting.&nbsp; These are all charges that NC specifically forbids landlords / managers from charging deposits for.&nbsp; We also often take this transition period to address other minor issues like annual bush trimming, gutter cleaning (chargeable in some situations but not others mainly involving length of time in the property), exterior paint /pressure wash etc.&nbsp; It&#39;s a good rule of thumb to expect to spend a months rent getting a home back in shape while turning over a tenant.&nbsp; Remember though, there is likely to be vacancy as well so expecting a 2-month total delay should be your minimum preparation.</span></span></span></span></span></span></td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table cellspacing="0" style="border-collapse:collapse; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top">
									<table align="left" cellspacing="0" style="border-collapse:collapse; width:264px">
										<tbody>
											<tr>
												<td style="vertical-align:top"><img alt="" class="gmail_canned_response_image" src="https://ci6.googleusercontent.com/proxy/PfYUBTKmTzL4jG_W7JUJhSxFzsT1tHMIBJLL9iaI9A-yKQC2pkk4EARWla8GcJgOVEtPz8rLzYdaCkkBujTaqJOyWiCh-wXYlTNpAtNv8TZZde6Y8juNFv40vq2Tl6GXwrEiHvGsBPuyxhZpW6AnpIxJsovqnQb0bg4=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/0f02dff7-4654-4f54-9b15-a4dc1d329224.jpg" style="border:0px; height:auto; max-width:30px; outline:none; vertical-align:bottom; width:30px" /></td>
											</tr>
										</tbody>
									</table>

									<table align="right" cellspacing="0" style="border-collapse:collapse; width:264px">
										<tbody>
											<tr>
												<td style="vertical-align:top"><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="color:#000000"><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">If we know in advance that the home is going to need a relatively significant amount of repairs, either from delayed spruce up expenses or a tough tenant,</span></span></span></span></span></span></td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; max-width:100%; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top"><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="color:#000000"><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">we will go ahead and hold the final months rent to help with these costs.&nbsp; If we&#39;re going that route we&#39;ll notify you as soon as possible.&nbsp; Since it&#39;s only reasonable to expect a fair amount of income deductions around this time, expect and be prepared for this potential right from the beginning.&nbsp; Whether it&#39;s deducted from the last month, or the upcoming tenant&#39;s first month there is no hiding from these costs so there is no reason to delay.&nbsp; You also have the option of sending us funds but most owners would prefer not to&nbsp;</span></span></span></span></span></span></td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table cellspacing="0" style="border-collapse:collapse; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top">
									<table align="left" cellspacing="0" style="border-collapse:collapse; width:264px">
										<tbody>
											<tr>
												<td style="vertical-align:top"><img alt="" class="gmail_canned_response_image" src="https://ci6.googleusercontent.com/proxy/PfYUBTKmTzL4jG_W7JUJhSxFzsT1tHMIBJLL9iaI9A-yKQC2pkk4EARWla8GcJgOVEtPz8rLzYdaCkkBujTaqJOyWiCh-wXYlTNpAtNv8TZZde6Y8juNFv40vq2Tl6GXwrEiHvGsBPuyxhZpW6AnpIxJsovqnQb0bg4=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/0f02dff7-4654-4f54-9b15-a4dc1d329224.jpg" style="border:0px; height:auto; max-width:30px; outline:none; vertical-align:bottom; width:30px" /></td>
											</tr>
										</tbody>
									</table>

									<table align="right" cellspacing="0" style="border-collapse:collapse; width:264px">
										<tbody>
											<tr>
												<td style="vertical-align:top"><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="color:#000000"><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">Now is a perfect time to reassess&nbsp;where you stand on insurance, from general liability to wind &amp; hail, and finally flood.&nbsp; In light of more frequent and powerful hurricanes around our region, it&#39;s a good idea to</span></span></span></span></span></span></td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; max-width:100%; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top"><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="color:#000000"><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">have a strong policy.&nbsp; A lost rent subsidy can be a life saver if your tenant has to move due to major damage</span></span></span></span></span></span></td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table cellspacing="0" style="border-collapse:collapse; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top">
									<table align="left" cellspacing="0" style="border-collapse:collapse; width:264px">
										<tbody>
											<tr>
												<td style="vertical-align:top"><img alt="" class="gmail_canned_response_image" src="https://ci6.googleusercontent.com/proxy/PfYUBTKmTzL4jG_W7JUJhSxFzsT1tHMIBJLL9iaI9A-yKQC2pkk4EARWla8GcJgOVEtPz8rLzYdaCkkBujTaqJOyWiCh-wXYlTNpAtNv8TZZde6Y8juNFv40vq2Tl6GXwrEiHvGsBPuyxhZpW6AnpIxJsovqnQb0bg4=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/0f02dff7-4654-4f54-9b15-a4dc1d329224.jpg" style="border:0px; height:auto; max-width:30px; outline:none; vertical-align:bottom; width:30px" /></td>
											</tr>
										</tbody>
									</table>

									<table align="right" cellspacing="0" style="border-collapse:collapse; width:264px">
										<tbody>
											<tr>
												<td style="vertical-align:top"><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="color:#000000"><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">Be decisive.&nbsp; If we list a home for rent, show it, and negotiate with renters only to have you change your mind about rerenting we will have to bill to cover our time and any refunded app fees.&nbsp; We are not a backup plan.&nbsp; If we put in the work things must move forward or we&#39;ll need to be reimbursed</span></span></span></span></span></span></td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table cellspacing="0" style="border-collapse:collapse; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top">
									<table align="left" cellspacing="0" style="border-collapse:collapse; width:264px">
										<tbody>
											<tr>
												<td style="vertical-align:top"><img alt="" class="gmail_canned_response_image" src="https://ci6.googleusercontent.com/proxy/PfYUBTKmTzL4jG_W7JUJhSxFzsT1tHMIBJLL9iaI9A-yKQC2pkk4EARWla8GcJgOVEtPz8rLzYdaCkkBujTaqJOyWiCh-wXYlTNpAtNv8TZZde6Y8juNFv40vq2Tl6GXwrEiHvGsBPuyxhZpW6AnpIxJsovqnQb0bg4=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/0f02dff7-4654-4f54-9b15-a4dc1d329224.jpg" style="border:0px; height:auto; max-width:30px; outline:none; vertical-align:bottom; width:30px" /></td>
											</tr>
										</tbody>
									</table>

									<table align="right" cellspacing="0" style="border-collapse:collapse; width:264px">
										<tbody>
											<tr>
												<td style="vertical-align:top"><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="color:#000000"><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">Have things changed?&nbsp; Was lawn maintenance included but won&#39;t be any longer?&nbsp; Utilities?&nbsp; New address / contact information?&nbsp; Who is reporting the income for tax purposes?&nbsp; Notify us asap!&nbsp; Contact your manager directly</span></span></span></span></span></span></td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; max-width:100%; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top"><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="color:#000000"><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">for contact or&nbsp;payment / tax changes.&nbsp;</span></span></span></span></span></span></td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td>
									<table cellspacing="0" style="background-color:#dc7d44; border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="background-color:#dc7d44; text-align:center; vertical-align:top">
												<p><span style="font-size:14px"><span style="color:#f2f2f2"><span style="font-family:Helvetica"><strong>We CANNOT stress this enough, the #1 cause of delays in getting a home rerented is due to failure to connect power &amp; water prior to your tenant leaving the home.&nbsp; Once the exact move out date is nailed down, make absolutely sure you put in a request for transfer early.&nbsp; This can save you reconnect fees as well.&nbsp; If the tenant vacates early they are required to notify us, and we&#39;ll make sure you know to change the billing start date as well</strong></span></span></span></p>
												</td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td>
									<table cellspacing="0" style="background-color:#1d8387; border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="background-color:#1d8387; text-align:center; vertical-align:top">
												<p><span style="font-size:14px"><span style="color:#f2f2f2"><span style="font-family:Helvetica"><img class="gmail_canned_response_image" src="https://ci4.googleusercontent.com/proxy/sR1A3uiYMruxKn2Pf1Dts3zCJwJDBgd0BkJYgcn5eEziTgHAnkCh7hDhlqK6cxTYJ-S2l4uYOqjBgdRva4sqVK5vBbvgaVCMvq93ipD6f2DWuK3rUdY2Pjnf-2Y_KUn4PUBcgit7hWVwWk73sToTqI-CeHBJ-kGowA0=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/f5938170-8db6-47b0-9535-5031f99b86dc.jpg" style="float:right; height:160px; margin-left:10px; margin-right:10px; outline:none; width:235px" /><strong>Repair Info </strong>- If we are dealing with a tenant paid repair, we will simply move forward and handle it without involving you.&nbsp; We&#39;ll have our contractor handle as quickly as possible, bill the tenant, and you&#39;ll have no need to get involved.</span></span></span></p>

												<p><br />
												<span style="font-size:14px"><span style="color:#f2f2f2"><span style="font-family:Helvetica">Now is a great time though to consider if you want to <strong>proactively address preventative maintenance.</strong>&nbsp; Since many owners are skeptical of optional repair recommendations we usually don&#39;t make them.&nbsp; This means that if you want to address termite spraying, minor wood rot, refinishing wood floors, or other items that don&#39;t directly effect our ability to get the home rented and are mostly preservation type tasks, you&#39;ll want to stress to your account manager a desire to focus on these issues and address them.&nbsp; Obviously we will not let a home degrade to a major degree, but we have a philosophy of focusing on marketing / maximizing income, then doing renovations in bulk.&nbsp; That however can sometimes stress out unprepared landlords after years of delayed renovations.&nbsp; Know the consequences of your strategy and remember, you can&#39;t have it both ways.&nbsp; If you&#39;re saving a lot of money today you will definitely have to spend some to get the home into great shape for selling etc.</span></span></span></p>
												</td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; table-layout:fixed; width:100%">
				<tbody>
					<tr>
						<td>
						<table cellspacing="0" style="border-collapse:collapse; border-top:2px solid #eaeaea; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td>&nbsp;</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; table-layout:fixed; width:100%">
				<tbody>
					<tr>
						<td>
						<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td>&nbsp;</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; table-layout:fixed; width:100%">
				<tbody>
					<tr>
						<td>
						<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td>&nbsp;</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; width:282px">
							<tbody>
								<tr>
									<td style="vertical-align:top"><img alt="" class="gmail_canned_response_image" src="https://ci5.googleusercontent.com/proxy/tXtDnUFER6IPw-eAoehdHrK_IYJmgBzdMEKyqd-wyr_YsNcYEj30miEvzTtSkAk0iaxY5_NbbECfRgqdW7bniRjZ5CREFZEAoZHxyOJCUXkhDvRoQXE35H7wNdh7w-eQAMaj-kEEbiJPiiPfYbY-CdtERPPxN9IiCMU=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/d3699700-7215-4d68-82f4-5d719f9ab189.jpg" style="border:0px; height:auto; max-width:1280px; outline:none; vertical-align:bottom; width:264px" /></td>
								</tr>
								<tr>
									<td style="vertical-align:top; width:282px">
									<p><br />
									<span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><strong>Landlords, in Light of a </strong><strong>Huge</strong><strong>&nbsp;Run Up in Rents &amp; Sale Prices, Do You Have an Endgame?</strong><br />
									<br />
									<span style="font-size:14px">You&#39;ve bought your rental property for the income stream and perhaps even in hope of future appreciation. While you may plan to own the property for a long, long time, a wise investor will have an endgame for your real estate. How long should you hold your real estate investment? When is a good time to sell the rental?&nbsp; &nbsp;<a href="https://VictoryRealEstateInc.us2.list-manage.com/track/click?u=550bd6ef99c9bde377800aeef&amp;id=5cf323f542&amp;e=ccbdb3fd00" style="color:#007c89" target="_blank"><span style="font-family:tahoma,verdana,segoe,sans-serif">Read more...</span></a></span></span></span></span></p>
									</td>
								</tr>
							</tbody>
						</table>

						<table align="right" cellspacing="0" style="border-collapse:collapse; width:282px">
							<tbody>
								<tr>
									<td style="vertical-align:top"><a href="https://VictoryRealEstateInc.us2.list-manage.com/track/click?u=550bd6ef99c9bde377800aeef&amp;id=d6cf60f7e6&amp;e=ccbdb3fd00" target="_blank" title=""><img alt="" class="gmail_canned_response_image" src="https://ci5.googleusercontent.com/proxy/CwfPP2Gm-5YfYvz5K6444Dg9roPKWkfhdd7OXtlSfZmSRuEA1XQlqiZwULb8I_YwQWLKUNKp6Nb6uevEOhWaLWl1OvJ5HlH9zj2tzRir3Cm1t9vPquO0x9pteiuSci22RoBnhg7ro38lLKQ1TYrW2N_n6qeczo8GpnM=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/2b2d3f7c-7177-4467-99ae-85167e03537a.jpg" style="border:0px; height:auto; max-width:1280px; outline:none; text-decoration-line:none; vertical-align:bottom; width:264px" /> </a></td>
								</tr>
								<tr>
									<td style="vertical-align:top; width:282px"><br />
									<span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><strong>The Hidden Cost&nbsp;of Vacancy to Landlords &amp; Rental Owners</strong></span></span></span>
									<p style="text-align:left"><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="font-size:14px">Each day your property sits vacant costs you. We strive to market your property aggressively to get the best quality tenant in the home at the best rate. We have said </span><span style="font-size:14px">may</span><span style="font-size:14px"> times before that a quality tenant will not overpay because they watch and compare for the best price. They too are looking for the best return on investment, just like you as the homeowner.</span></span></span></span></p>

									<p style="text-align:left"><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="font-size:14px">Most homes lose at least $30 a day when vacant.&nbsp; <a href="https://VictoryRealEstateInc.us2.list-manage.com/track/click?u=550bd6ef99c9bde377800aeef&amp;id=87c4301832&amp;e=ccbdb3fd00" style="color:#007c89" target="_blank">Read more...</a></span></span></span></span></p>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>
			</td>
		</tr>
	</tbody>
</table>`);

}




function sendApprovedNotice() {
  Office.context.mailbox.item.subject.setAsync("Your MoveZen Application is Approved!");
  // Office.context.mailbox.item.body.setAsync("This is the body of the email.");
  prependHtmlBody(`<p>Thank you again for your interest in partnering with us and the homeowner</p><br>

  <p>We are starting the process of getting you set up to move in! &nbsp;From here we need the first month&#39;s rent (nonrefundable) hold payment made within 48 hours. &nbsp;<br />
  <br />
  We&#39;ll collect your security deposit just prior to move in, or you can pay both now. &nbsp;In most cases only the first month&#39;s rent will be non-refundable should you not be able to move forward, so any additional payments are refundable, deposits, pet fees, etc. &nbsp;If we hold a home longer than 45 days the daily prorate hold charges will apply from day 46 on<br />
  <br />
  Your hold payment will ensure that no one else can get the property, a signed lease doesn&#39;t. &nbsp;You have to pay the full hold payment to fully secure the property. You&#39;ll receive a copy of your lease in just a bit, and it must be signed within 3 days or you risk losing the home. &nbsp;No home is completely secured until we have a signed agreement, and consideration (payment)<br />
  <br />
  From this point forward we&#39;ll send several very important emails and texts, so be sure to safelist us or keep an eye on your junk folder. &nbsp;Your tenant portal invite will arrive momentarily, and you are welcome to pay online via your portal IF your move-in is more than 7 days away from your payment date, otherwise, you must per company policy pay by certified check / money order delivered to our office or staff. &nbsp;There are never exceptions to that rule due to significant fraud risks. Please do not miss it. If you pay online, you would have to pay again in certified funds to move in within 7 days, and we&#39;d credit the uncleared funds to the next month<br />
  <br />
  <a href="https://movezen.sharepoint.com/:b:/s/Teams/Ed6cnS8o6Q5ChC7kduknd2oBhPoqj51MZdUXYuipKqtySQ?e=d5nokc">Consult the &quot;rules of the road&quot; if you have additional questions</a><br />
  <br />
  We&#39;re looking forward to having you! &nbsp;Customer Service Team</p>`);

}











Office.onReady(info => {
  if (info.host === Office.HostType.Outlook) {
    document.getElementById("insertSorry").onclick = sendSorry;
    document.getElementById("insertApp").onclick = sendApp;
    document.getElementById("insertVendor").onclick = sendVendor;
    document.getElementById("insertRentalResponse").onclick = sendRentalResponse;
    document.getElementById("insertPayslip").onclick = sendPayslip;
    document.getElementById("insertMove").onclick = sendMove;
  }
});





// /*
//  * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
//  * See LICENSE in the project root for license information.
//  */

// /* global global, Office, self, window */

// Office.onReady(() => {
//   // If needed, Office.js is ready to be called
// });

// /**
//  * Shows a notification when the add-in command is executed.
//  * @param event {Office.AddinCommands.Event}
//  */
// function action(event) {
//   const message = {
//     type: Office.MailboxEnums.ItemNotificationMessageType.InformationalMessage,
//     message: "Performed action.",
//     icon: "Icon.80x80",
//     persistent: true,
//   };

//   // Show a notification message
//   Office.context.mailbox.item.notificationMessages.replaceAsync("action", message);

//   // Be sure to indicate when the add-in command function is complete
//   event.completed();
// }

// function getGlobal() {
//   return typeof self !== "undefined"
    // ? self
//     : typeof window !== "undefined"
//     ? window
//     : typeof global !== "undefined"
//     ? global
//     : undefined;
// }

// const g = getGlobal();

// // The add-in command functions need to be available in global scope
// g.action = action;

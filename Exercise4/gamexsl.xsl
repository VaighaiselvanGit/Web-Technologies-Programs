<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<!-- TODO: Auto-generated template -->
		<html>
		  <body>
		     <style>
		     table, th, td {
                border: 1px solid black;
             } 
              th,td{padding:10px; } th{background-color:#000;color:#fff; }
              table{margin-left:auto;margin-right:auto;margin-top:100px; }</style>
		     <h1 style="text-align:center;">Web Technology Lab Exercise 4</h1>
		     <h3 style="text-align:center;">To write a XSL file for the following XML file to render it as HTML table</h3>
		     <table>
		        <tr>
		        <th>GAME ID</th>
		        <th>NAME</th>
		        <th>POPULARITY</th>
		        <th>PLAYING COUNTRIES</th>
		       </tr>
		       
				<xsl:for-each select="sports/game">
				    <tr>
				      <td><xsl:value-of select="@id"/></td>
				      <td><xsl:value-of select="name"/></td>
				      <td><xsl:value-of select="paragraph"/></td>
				      <td><xsl:value-of select="playingcountry"/></td>
				    </tr>
    			</xsl:for-each>
		     </table> 
		           <xsl:variable name="total" select="sum(//playingcountry)"></xsl:variable>			        
		           <h1 style="margin-left:62%;">TOTAL: <xsl:value-of select="$total"/></h1> 
		     
		  </body>
		
		</html>
		
		
	</xsl:template>
</xsl:stylesheet>
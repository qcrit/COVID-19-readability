# COVID-19-readability
Corpus, data, and code for Mishra and Dexter, "Comparison of Readability of Official Public Health Information About COVID-19 on Websites of International Agencies and the Governments of 15 Countries," JAMA Network Open 2020 

Readability analyses were performed using Readability Studio Professional, version 2019.3 (http://www.oleandersolutions.com/readabilitystudio.html). For each readability analysis, four sets of files are provided: 1) input txt files containing the text of each web page, 2) output filtered txt files produced by RS, which reflect the preprocessing performed by the package, 3) an HTM report of the results, and 4) a text summary of the results. Files are divided into three directories: CDC websites ("CDC"), non-CDC websites, including pages from the WHO, ECDC, and 15 countries ("Non_CDC"), and US state websites ("US_states"). The CDC pages are divided further into three categories: FAQ pages for individuals, FAQ pages for administrators, and other pages. "CDC_guideline_comparison.xlsx" contains the raw data for the evaluation of CDC pages against the recommendations provided in "Simply Put: A guide to creating easy-to-understand materials" (https://www.cdc.gov/healthliteracy/pdf/simply_put.pdf). 

"Table_readability_data.xlsx" contains all of the raw readability data summarized in the Table ("Readability of COVID-19 Information from the WHO, CDC, ECDC, and Governments of 15 Countries") in the main paper. 

Syntactic complexity data was generated using the L2 Syntactic Complexity Analyzer, version 3.3.3 (http://www.personal.psu.edu/xxl13/downloads/l2sca.html) with the input txt files described above. Extensive documentation is available on the download page. The directory "syntactic_complexity" contains all of the raw L2 data, including the data on mean length of clause (MLC) and dependent clauses per T-unit (DC/T) summarized in the Table in the main paper.  

The Jupyter notebook "difficult_words_analysis.ipynb" in the directory "difficult_words" can be used to reproduce the analysis of difficult words and phrases listed in the CDC resource "Everyday Words for Public Health Communication" (https://www.cdc.gov/other/pdf/everydaywordsforpublichealthcommunication.pdf). 

The Matlab script "50_states_scatterplot.m" in the subdirectory "Figure_US_states" can be used to reproduce the Figure ("Readability, Literacy, and Use of Difficult Terms Across All 50 US States") in the main paper. 



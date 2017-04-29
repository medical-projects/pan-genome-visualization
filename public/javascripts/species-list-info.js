var species_dt={
	'optgroup1':{'label':'Case studies:',
				 'members': ['S_pneumoniae616','P_marinus_meta']},
	'optgroup2':{'label':'Pan-genomes from RefSeq records:',
				 'members': ['A_baumannii','B_anthracis','B_pseudomallei','B_subtilis','C_jejuni','C_pseudotuberculosis','C_trachomatis','E_coli','F_tularensis','H_pylori','K_pneumoniae','L_lactis','L_monocytogenes','L_pneumophila','M_tuberculosis','N_meningitidis','P_aeruginosa','S_aureus','S_enterica','S_pneumoniae','S_pyogenes','V_cholerae','X_citri','X_oryzae','Y_pestis']},
	'S_pneumoniae616':'Epidemiology of S. pneumoniae',
	'P_marinus_meta':'Prochlorococcus marinus (metadata)',
	'A_baumannii': 'Acinetobacter baumannii (71)',
	'B_anthracis': 'Bacillus anthracis (43)',
	//'B_cereus': 'Bacillus cereus (36)',
	//'B_pertussis': 'Bordetella pertussis (291)',
	'B_pseudomallei': 'Burkholderia pseudomallei (59)',
	'B_subtilis': 'Bacillus subtilis (50)',
	'B_thuringiensis': 'Bacillus thuringiensis (36)',
	//'B_velezensis': 'Bacillus velezensis (26)',
	'C_jejuni': 'Campylobacter jejuni (113)',
	'C_pseudotuberculosis': 'Corynebacterium pseudotuberculosis (59)',
	'C_trachomatis': 'Chlamydia trachomatis (68)',
	'E_coli': 'Escherichia coli (307)',
	'F_tularensis': 'Francisella tularensis (35)',
	'H_pylori': 'Helicobacter pylori (85)',
	'K_pneumoniae': 'Klebsiella pneumoniae (109)',
	'L_lactis': 'Lactococcus lactis (29)',
	'L_monocytogenes': 'Listeria monocytogenes (95)',
	//'L_plantarum': 'Lactobacillus plantarum (26)',
	'L_pneumophila': 'Legionella pneumophila (62)',
	//'M_abscessus': 'Mycobacterium abscessus (29)',
	'M_tuberculosis': 'Mycobacterium tuberculosis (51)',
	'N_meningitidis': 'Neisseria meningitidis (78)',
	'P_aeruginosa': 'Pseudomonas aeruginosa (71)',
	//'S_agalactiae': 'Streptococcus agalactiae (29)',
	'S_aureus': 'Staphylococcus aureus (146)',
	'S_enterica': 'Salmonella enterica (260)',
	'S_pneumoniae': 'Streptococcus pneumoniae (33)',
	'S_pyogenes': 'Streptococcus pyogenes (50)',
	'V_cholerae': 'Vibrio cholerae (28)',
	'X_citri': 'Xanthomonas citri (26)',
	'X_oryzae': 'Xanthomonas oryzae (26)',
	'Y_pestis': 'Yersinia pestis (33)'
};
var species_search_dt=[
{"species":"Escherichia coli","linkName":"Escherichia coli"},
{"species":"Bordetella pertussis","linkName":"Bordetella pertussis"},
{"species":"Salmonella enterica","linkName":"Salmonella enterica"},
{"species":"Staphylococcus aureus","linkName":"Staphylococcus aureus"},
{"species":"Campylobacter jejuni","linkName":"Campylobacter jejuni"},
{"species":"Klebsiella pneumoniae","linkName":"Klebsiella pneumoniae"},
{"species":"Listeria monocytogenes","linkName":"Listeria monocytogenes"},
{"species":"Helicobacter pylori","linkName":"Helicobacter pylori"},
{"species":"Neisseria meningitidis","linkName":"Neisseria meningitidis"},
{"species":"Acinetobacter baumannii","linkName":"Acinetobacter baumannii"},
{"species":"Pseudomonas aeruginosa","linkName":"Pseudomonas aeruginosa"},
{"species":"Chlamydia trachomatis","linkName":"Chlamydia trachomatis"},
{"species":"Legionella pneumophila","linkName":"Legionella pneumophila"},
{"species":"Corynebacterium pseudotuberculosis","linkName":"Corynebacterium pseudotuberculosis"},
{"species":"Burkholderia pseudomallei","linkName":"Burkholderia pseudomallei"},
{"species":"Mycobacterium tuberculosis","linkName":"Mycobacterium tuberculosis"},
{"species":"Bacillus subtilis","linkName":"Bacillus subtilis"},
{"species":"Streptococcus pyogenes","linkName":"Streptococcus pyogenes"},
{"species":"Bacillus anthracis","linkName":"Bacillus anthracis"},
{"species":"Bacillus thuringiensis","linkName":"Bacillus thuringiensis"},
{"species":"Bacillus cereus","linkName":"Bacillus cereus"},
{"species":"Francisella tularensis","linkName":"Francisella tularensis"},
{"species":"Yersinia pestis","linkName":"Yersinia pestis"},
{"species":"Streptococcus pneumoniae","linkName":"Streptococcus pneumoniae"},
{"species":"Mycobacterium abscessus","linkName":"Mycobacterium abscessus"},
{"species":"Lactococcus lactis","linkName":"Lactococcus lactis"},
{"species":"Streptococcus agalactiae","linkName":"Streptococcus agalactiae"},
{"species":"Vibrio cholerae","linkName":"Vibrio cholerae"},
{"species":"Xanthomonas oryzae","linkName":"Xanthomonas oryzae"},
{"species":"Lactobacillus plantarum","linkName":"Lactobacillus plantarum"},
{"species":"Bacillus velezensis","linkName":"Bacillus velezensis"},
{"species":"Xanthomonas citri","linkName":"Xanthomonas citri"},
{"species":"Streptococcus suis","linkName":"Streptococcus suis"},
{"species":"Buchnera aphidicola","linkName":"Buchnera aphidicola"},
{"species":"Clostridium botulinum","linkName":"Clostridium botulinum"},
{"species":"Mycoplasma pneumoniae","linkName":"Mycoplasma pneumoniae"},
{"species":"Enterobacter cloacae","linkName":"Enterobacter cloacae"},
{"species":"Dehalococcoides mccartyi","linkName":"Dehalococcoides mccartyi"},
{"species":"Pseudomonas sp.","linkName":"Pseudomonas sp."},
{"species":"Synechococcus sp.","linkName":"Synechococcus sp."},
{"species":"Enterococcus faecium","linkName":"Enterococcus faecium"},
{"species":"Pseudomonas putida","linkName":"Pseudomonas putida"},
{"species":"Bacillus amyloliquefaciens","linkName":"Bacillus amyloliquefaciens"},
{"species":"Campylobacter coli","linkName":"Campylobacter coli"},
{"species":"Streptomyces sp.","linkName":"Streptomyces sp."},
{"species":"Piscirickettsia salmonis","linkName":"Piscirickettsia salmonis"},
{"species":"Bifidobacterium longum","linkName":"Bifidobacterium longum"},
{"species":"Haemophilus influenzae","linkName":"Haemophilus influenzae"},
{"species":"Bacillus sp.","linkName":"Bacillus sp."},
{"species":"Burkholderia mallei","linkName":"Burkholderia mallei"},
{"species":"Pasteurella multocida","linkName":"Pasteurella multocida"},
{"species":"Brucella suis","linkName":"Brucella suis"},
{"species":"Corynebacterium glutamicum","linkName":"Corynebacterium glutamicum"},
{"species":"Corynebacterium diphtheriae","linkName":"Corynebacterium diphtheriae"},
{"species":"Streptococcus thermophilus","linkName":"Streptococcus thermophilus"},
{"species":"Pseudomonas fluorescens","linkName":"Pseudomonas fluorescens"},
{"species":"Bifidobacterium animalis","linkName":"Bifidobacterium animalis"},
{"species":"Burkholderia cenocepacia","linkName":"Burkholderia cenocepacia"},
{"species":"Chlamydia psittaci","linkName":"Chlamydia psittaci"},
{"species":"Vibrio parahaemolyticus","linkName":"Vibrio parahaemolyticus"},
{"species":"Burkholderia thailandensis","linkName":"Burkholderia thailandensis"},
{"species":"Yersinia enterocolitica","linkName":"Yersinia enterocolitica"},
{"species":"Mycobacterium bovis","linkName":"Mycobacterium bovis"},
{"species":"Burkholderia sp.","linkName":"Burkholderia sp."},
{"species":"Brucella abortus","linkName":"Brucella abortus"},
{"species":"Aeromonas hydrophila","linkName":"Aeromonas hydrophila"},
{"species":"Lactobacillus delbrueckii","linkName":"Lactobacillus delbrueckii"},
{"species":"Acetobacter pasteurianus","linkName":"Acetobacter pasteurianus"},
{"species":"Rhizobium phaseoli","linkName":"Rhizobium phaseoli"},
{"species":"Yersinia pseudotuberculosis","linkName":"Yersinia pseudotuberculosis"},
{"species":"Pseudomonas syringae","linkName":"Pseudomonas syringae"},
{"species":"Alteromonas mediterranea","linkName":"Alteromonas mediterranea"},
{"species":"Mycobacterium avium","linkName":"Mycobacterium avium"},
{"species":"Ralstonia solanacearum","linkName":"Ralstonia solanacearum"},
{"species":"Neisseria gonorrhoeae","linkName":"Neisseria gonorrhoeae"},
{"species":"Arthrobacter sp.","linkName":"Arthrobacter sp."},
{"species":"Rhizobium sp.","linkName":"Rhizobium sp."},
{"species":"Mycobacterium sp.","linkName":"Mycobacterium sp."},
{"species":"Bacillus pumilus","linkName":"Bacillus pumilus"},
{"species":"Paenibacillus sp.","linkName":"Paenibacillus sp."},
{"species":"[Haemophilus] ducreyi","linkName":"[Haemophilus] ducreyi"},
{"species":"Mycoplasma mycoides","linkName":"Mycoplasma mycoides"},
{"species":"Propionibacterium acnes","linkName":"Propionibacterium acnes"},
{"species":"Shigella flexneri","linkName":"Shigella flexneri"},
{"species":"Rhodococcus sp.","linkName":"Rhodococcus sp."},
{"species":"Rickettsia rickettsii","linkName":"Rickettsia rickettsii"},
{"species":"Bifidobacterium breve","linkName":"Bifidobacterium breve"},
{"species":"Mycoplasma gallisepticum","linkName":"Mycoplasma gallisepticum"},
{"species":"Mannheimia haemolytica","linkName":"Mannheimia haemolytica"},
{"species":"Granulibacter bethesdensis","linkName":"Granulibacter bethesdensis"},
{"species":"Corynebacterium ulcerans","linkName":"Corynebacterium ulcerans"},
{"species":"Enterococcus faecalis","linkName":"Enterococcus faecalis"},
{"species":"Fusobacterium nucleatum","linkName":"Fusobacterium nucleatum"},
{"species":"Riemerella anatipestifer","linkName":"Riemerella anatipestifer"},
{"species":"Pseudomonas stutzeri","linkName":"Pseudomonas stutzeri"},
{"species":"Paenibacillus polymyxa","linkName":"Paenibacillus polymyxa"},
{"species":"Lactobacillus helveticus","linkName":"Lactobacillus helveticus"},
{"species":"Rickettsia prowazekii","linkName":"Rickettsia prowazekii"},
{"species":"Brucella melitensis","linkName":"Brucella melitensis"},
{"species":"Prochlorococcus marinus","linkName":"Prochlorococcus marinus"}];

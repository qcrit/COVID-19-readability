% Matlab script to produce Figure ("Readability, Literacy, and Use of
% Difficult Terms Across All 50 US States")

% load data 
[num,txt,raw] = xlsread('input_data_scatterplot.xlsx');

% number of states
N = 50;
% Flesch-Kincaid Grade Level (FKGL) for each state
FK = num(:,1);

% percentage of adults lacking basic prose literacy for each state
% data available at: https://nces.ed.gov/naal/estimates/StateEstimates.aspx
literacy = num(:,2);

% total number of CDC difficult words and phrases for each state
raw = num(:,3);

% fraction of CDC difficult words and phrases used for each state
fraction = num(:,4);

% calculate Spearman r for FKGL and fraction of difficult terms
[rho, p] = corr(FK, fraction, 'type', 'Spearman')

% define JAMA colors
color1 = [55/255, 78/255, 85/255];
color2 = [223/255, 143/255, 68/255];
color3 = [0/255, 161/255, 213/255];

% plot FKGL vs literacy rate for all 50 states (note that three points are
% identical, so there are 47 total dots in plot)
plot(FK(1:15), literacy(1:15), '.', 'Color', color1, 'MarkerSize', 20)
hold on
plot(FK(16:41), literacy(16:41), '.', 'Color', color2, 'MarkerSize', 20)
hold on
plot(FK(42:50), literacy(42:50), '.', 'Color', color3, 'MarkerSize', 20)

% format plot
xlabel('Flesch-Kincaid Grade Level of COVID-19 Guidelines by State', 'FontSize',10)
ylabel('Adults Lacking Basic Prose Literacy Skills, %', 'FontSize', 10)
legend({'0-15% of terms', '16-30% of terms', '\geq 31% of terms'}, 'Location', 'Northwest')
xticks([6 8 10 12 14])
xlim([5.5 14.5]) 
ylim([5 25])
set(gca, 'FontSize',10)
set(gca, 'FontName', 'Arial')
axis square
box off
grid on

% save plot 
saveas(gcf, '50_states_scatterplot.pdf')

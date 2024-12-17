import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import BersatHeader from '../components/BersatHeader';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams[0]}</Text>
        <Text style={styles.teamsSecond}>{teams[1]}</Text>
      </View>

      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
      </View>

      <Text style={styles.matchTime}>{time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <BersatHeader />
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('NBA', '15.01 20:45', [
          'Miami Heat',
          'San Antonio Spurs',
        ])}

        {renderBroadcast('UEFA', '22.01 21:30', ['Bayern Munich', 'Chelsea'])}

        {renderBroadcast('NFL', '18.01 19:00', [
          'Seattle Seahawks',
          'San Francisco 49ers',
        ])}

        {renderBroadcast('NHL', '05.02 21:00', [
          'Edmonton Oilers',
          'Calgary Flames',
        ])}

        {renderBroadcast('MLB', '12.02 18:45', [
          'Los Angeles Dodgers',
          'Chicago Cubs',
        ])}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 40,
    borderColor: 'rgba(19, 55, 141, 0.3)',
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'space-between',
    backgroundColor: COLORS.cardBackground,
  },
  league: {
    fontSize: 40,
    fontFamily: FONTS.black,
    color: COLORS.main,
    textAlign: 'left',
    paddingBottom: 10,
  },
  leagueContainer: {
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '65%',
  },
  matchTime: {
    fontSize: 16,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    textAlign: 'center',
    width: '50%',
    position: 'absolute',
    bottom: -25,
    backgroundColor: COLORS.placeholder,
    borderRadius: 12,
    alignSelf: 'center',
  },
  teams: {
    textAlign: 'center',
    verticalAlign: 'middle',
    fontFamily: FONTS.italic,
    fontSize: 17,
    color: COLORS.black,
    marginLeft: 5,
    height: 45,
  },
  teamsSecond: {
    textAlign: 'center',
    verticalAlign: 'middle',
    fontFamily: FONTS.italic,
    fontSize: 17,
    color: COLORS.black,
    marginLeft: 5,
    height: 45,
    borderBottomRightRadius: 12,
  },
});

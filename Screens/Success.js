import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
const Separator = () => <View style={style.separator} />;
const Success = ({navigation, route}) => {
  return (
    <View style={style.main}>
      <Image style={style.image} source={require('../assets/tick.png')} />
      <Text style={style.billNoText}>{route.params.billNo}</Text>
      <Text style={style.amountText}>{'₹' + route.params.amount}</Text>
      <Text style={style.brandText}>{route.params.retailerName}</Text>
      <Separator />
      <Text style={style.modeText}>{'PAID BY ' + route.params.method}</Text>
      <Text style={style.endText}>Redirecting to home screen..</Text>
      <View style={style.bottomView}>
        <Text style={style.endText}>Redirecting to home screen..</Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  main: {
    backgroundColor: '#188748',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 114,
    height: 114,
  },
  billNoText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#EFEFEF',
    marginTop: 30,
  },
  amountText: {
    textAlign: 'center',
    fontSize: 40,
    color: '#EFEFEF',
    marginVertical: 13,
  },
  brandText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#EFEFEF',
    marginVertical: 30,
  },
  separator: {
    marginVertical: 43,
    borderBottomColor: '#F4F4F4',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderStyle: 'dashed',
    marginHorizontal: 21,
    alignItems: 'center',
    width: 1,
  },
  modeText: {
    textAlign: 'center',
    fontSize: 24,
    color: '#EFEFEF',
    marginVertical: 14,
  },
  endText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#EFEFEF',
    marginVertical: 20,
    lineHeight: 18,
    position: 'absolute',
    bottom: 0,
  },
  bottomView: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
});
export default Success;
